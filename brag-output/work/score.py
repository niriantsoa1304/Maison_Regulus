"""Soundtrack for the Maison Regulus brag video: one piece in D major, music + SFX mixed together."""
import numpy as np
from scipy.signal import fftconvolve, butter, sosfilt
from scipy.io import wavfile

SR = 48000
DUR = 22.0
N = int(SR * DUR)
rng = np.random.default_rng(7)
t_all = np.arange(N) / SR


def hz(m):  # midi -> Hz
    return 440.0 * 2 ** ((m - 69) / 12)


def place(buf, sig, at, gain=1.0, pan=0.0):
    i = int(at * SR)
    if i >= N:
        return
    sig = sig[: N - i] * gain
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    buf[0, i:i + len(sig)] += sig * l * 1.414
    buf[1, i:i + len(sig)] += sig * r * 1.414


def lp(x, f, order=2):
    return sosfilt(butter(order, f, 'low', fs=SR, output='sos'), x)


def hp(x, f, order=2):
    return sosfilt(butter(order, f, 'high', fs=SR, output='sos'), x)


def bp(x, lo, hi, order=2):
    return sosfilt(butter(order, [lo, hi], 'band', fs=SR, output='sos'), x)


def adsr(n, a, r, sus=1.0):
    e = np.ones(n) * sus
    na, nr = int(a * SR), int(r * SR)
    e[:na] = np.linspace(0, sus, na) ** 2
    if nr:
        e[-nr:] *= np.linspace(1, 0, nr) ** 1.5
    return e


def pad_voice(m, dur, a=1.2, r=1.6):
    n = int(dur * SR)
    tt = np.arange(n) / SR
    f = hz(m)
    s = np.zeros(n)
    for d in (-0.06, 0.0, 0.07):  # gently detuned saw-ish stack
        ff = f * 2 ** (d / 12)
        for k in range(1, 7):
            s += np.sin(2 * np.pi * ff * k * tt + rng.uniform(0, 6.28)) / (k ** 1.6)
    s = lp(s, 1800)
    return s * adsr(n, a, r) * 0.045


def bell(m, dur=2.8, bright=1.0):
    n = int(dur * SR)
    tt = np.arange(n) / SR
    f = hz(m)
    s = (np.sin(2 * np.pi * f * tt) * np.exp(-tt * 2.2)
         + 0.35 * bright * np.sin(2 * np.pi * f * 2.0 * tt) * np.exp(-tt * 4.0)
         + 0.18 * bright * np.sin(2 * np.pi * f * 3.01 * tt) * np.exp(-tt * 7.0)
         + 0.08 * bright * np.sin(2 * np.pi * f * 4.2 * tt) * np.exp(-tt * 11.0))
    att = np.minimum(1, tt / 0.004)
    return s * att * 0.22


def noise(dur):
    return rng.standard_normal(int(dur * SR))


def whoosh(dur=0.9, lo=300, hi=3500, gain=1.0):
    n = int(dur * SR)
    s = noise(dur)
    # sweep a band-pass by mixing two filtered copies with a moving crossfade
    a, b = bp(s, lo, lo * 3), bp(s, hi / 3, hi)
    k = np.linspace(0, 1, n)
    env = np.sin(np.pi * k) ** 2
    return (a * (1 - k) + b * k) * env * 0.09 * gain


def boom(m=38, dur=2.4):
    n = int(dur * SR)
    tt = np.arange(n) / SR
    f = hz(m) * (1 + 0.6 * np.exp(-tt * 18))
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-tt * 1.6) * np.minimum(1, tt / 0.01) * 0.55


def click(m=86):
    n = int(0.08 * SR)
    tt = np.arange(n) / SR
    return (np.sin(2 * np.pi * hz(m) * tt) * np.exp(-tt * 70) * 0.18
            + bp(noise(0.08), 2500, 7000) * np.exp(-tt * 120) * 0.05)


def shimmer(dur=2.0, gain=1.0):
    s = hp(noise(dur), 6000) * 0.02
    n = len(s)
    k = np.linspace(0, 1, n)
    return s * np.sin(np.pi * k) ** 1.5 * gain


music = np.zeros((2, N))
sfx = np.zeros((2, N))

# ---------- harmony (D major), changes follow the scenes ----------
D, E, Fs, G, A, B, Cs = 62, 64, 66, 67, 69, 71, 73
chords = [
    (0.0, 3.6, [38, 50, 57, 64]),             # D sus2 drone: the night sky
    (3.4, 7.6, [38, 50, 57, 62, 66, 69]),      # D add9 bloom: the house appears
    (7.4, 11.6, [35, 47, 54, 62, 66, 69]),     # Bm9: the offers
    (11.4, 15.0, [31, 43, 54, 59, 62, 66]),    # Gmaj7: first star
    (14.8, 18.9, [33, 45, 52, 57, 62, 64]),    # A sus: writing to the house
    (18.8, 22.0, [38, 50, 57, 61, 64, 66]),    # Dmaj9: resolve
]
for i, (a, b, notes) in enumerate(chords):
    end_r = 2.2 if i == len(chords) - 1 else 1.0
    for j, m in enumerate(notes):
        v = pad_voice(m, b - a + end_r, a=1.6 if i == 0 else 0.6, r=end_r + (1.4 if i == len(chords) - 1 else 0))
        place(music, v, a, gain=0.9 if m < 45 else 0.6, pan=(-0.35 + 0.7 * j / max(1, len(notes) - 1)))

# ---------- celesta arpeggio, 90 bpm eighths, from the emblem lock ----------
beat = 60 / 90 / 2
arps = [
    (4.9, 7.4, [D + 12, A, Fs + 12, E + 12]),
    (7.4, 11.4, [B, Fs + 12, D + 12, A + 12]),
    (11.4, 14.8, [G, D + 12, B + 12, Fs + 12]),
    (14.8, 18.8, [A, E + 12, Cs + 12, D + 12]),
]
for a, b, ns in arps:
    k = 0
    tt = a
    while tt < b - 0.05:
        vel = 0.55 + 0.25 * (k % 4 == 0)
        place(music, bell(ns[k % len(ns)], 2.0, 0.8), tt, gain=vel * 0.6, pan=0.4 * np.sin(k * 1.3))
        tt += beat
        k += 1

# ---------- soft pulse under the product scenes ----------
pulse_t = 7.4 + beat * 2
while pulse_t < 18.6:
    n = int(0.5 * SR)
    tt = np.arange(n) / SR
    f = hz(38) * (1 + 0.8 * np.exp(-tt * 30))
    k = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 9) * 0.22
    place(music, k, pulse_t, gain=1.0)
    pulse_t += beat * 4

# ---------- sky: star pings as the constellation draws ----------
for i, m in enumerate([D + 24, A + 12, E + 24, Fs + 24, A + 24, B + 12, D + 24, E + 24, A + 12, Fs + 24]):
    place(music, bell(m, 2.6, 0.5), 0.25 + i * 0.17 + 0.5, gain=0.16, pan=-0.6 + 1.2 * (i / 9))

# ---------- sfx, tuned to the key and blended in ----------
place(sfx, shimmer(2.2, 1.2), 1.2)                         # Regulus flares
place(sfx, bell(A + 24, 3.5, 0.6), 1.6, 0.35, 0.3)
place(sfx, bell(D + 24, 3.5, 0.6), 1.75, 0.25, 0.4)
place(sfx, whoosh(1.1, 200, 4000, 1.3), 3.3)               # dive into the star
place(sfx, boom(38), 4.85, 0.8)                            # emblem locks
place(sfx, bell(D + 12, 4.0, 0.7), 4.9, 0.5)
place(sfx, shimmer(1.5, 0.7), 4.6)
for at in (7.25, 11.25, 14.7, 18.65):                      # scene turns
    place(sfx, whoosh(0.8, 250, 2500, 0.6), at, pan=0.1)
place(sfx, click(D + 24), 8.55, 0.9, 0.2)                  # click "Portfolios"
place(sfx, whoosh(1.0, 150, 1500, 0.45), 8.75)             # page scroll
for i in range(5):                                         # tags pop
    place(sfx, bell([Fs + 24, A + 24, B + 24, D + 36, E + 36][i], 1.2, 0.3), 11.45 + 1.2 + i * 0.13, 0.12, 0.5 - 0.25 * i)
# typing: tiny soft ticks, kept in the background
for a, b, n in ((15.05, 15.5, 11), (15.6, 16.0, 15), (16.4, 17.0, 36)):
    for i in range(n):
        at = a + (b - a) * i / n + rng.uniform(-0.008, 0.008)
        place(sfx, click(rng.choice([D + 36, A + 24, Fs + 36])), at, 0.18, 0.15 + rng.uniform(-0.1, 0.1))
place(sfx, click(A + 24), 16.22, 0.7, 0.1)                 # chip
place(sfx, click(D + 24), 17.3, 0.9, 0.25)                 # send
for i, m in enumerate([D + 24, Fs + 24, A + 24, D + 36]):  # message sent
    place(sfx, bell(m, 3.0, 0.7), 17.62 + i * 0.09, 0.32, -0.2 + 0.15 * i)
place(sfx, shimmer(1.6, 0.9), 17.5)
place(sfx, boom(38, 3.0), 18.85, 0.35)

# ---------- shared room: both through the same reverb ----------
def ir(seconds=2.8, seed=0):
    r = np.random.default_rng(seed)
    n = int(seconds * SR)
    tt = np.arange(n) / SR
    x = r.standard_normal(n) * np.exp(-tt * 3.0 / seconds * 2.3)
    return lp(x, 6000) / np.sqrt(np.sum(x ** 2))

irs = [ir(2.8, 1), ir(2.8, 2)]
mix = music + sfx * 0.8
wet = np.stack([fftconvolve(mix[c], irs[c])[:N] for c in range(2)])
out = mix * 0.72 + wet * 0.55
out = np.stack([hp(c, 30) for c in out])

# gentle fades and soft master limiting
fade_in = np.minimum(1, t_all / 0.25)
fade_out = np.clip((DUR - t_all) / 1.6, 0, 1) ** 1.2
out *= fade_in * fade_out
out /= np.max(np.abs(out)) + 1e-9
out = np.tanh(out * 1.05) / np.tanh(1.05)
out *= 10 ** (-1.0 / 20)
wavfile.write('score.wav', SR, (out.T * 32767).astype(np.int16))
print('ok', out.shape, 'rms dB', 20 * np.log10(np.sqrt(np.mean(out ** 2))))
