// Bilingue : le français est dans le HTML, l'anglais est appliqué par ce script
const i18n = {
  fr: {
    'meta.title': 'Maison Regulus — Portfolios & sites web sur mesure',
    'logo.src': 'assets/logo-fr.svg',
    'logo.alt': 'Maison Regulus — Portfolios & sites web',
    'hero.sub': 'Portfolios & sites web',
    'skip': 'Aller au contenu',
    'work.p1.alt': 'Page d’accueil du portfolio de Niriantsoa Francia Raheriniaina sur ordinateur',
    'meta.description': 'Maison Regulus : création de sites web sur mesure et à votre image. Portfolios pour étudiants et professionnels, sites vitrines pour entreprises et commerces.',
    'nav.aria': 'Navigation principale',
    'brand.aria': 'Maison Regulus — accueil',
    'lang.aria': 'Langue',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.work': 'Réalisations',
    'nav.contact': 'Contact',
    'cta.contact': 'Nous contacter',
    'hero.lead': 'Maison de création de sites web sur mesure et à votre image.',
    'cta.quote': 'Demander un devis',
    'cta.work': 'Voir nos réalisations',
    'offer1.meta': 'Étudiants & professionnels',
    'offer2.title': 'Site Vitrine',
    'offer2.meta': 'Entreprises & commerces',
    'fab.wa': 'Réponse rapide',
    'fab.mail': 'E-mail',
    'fab.toggle': 'Parlons-en',
    'about.eyebrow': 'À propos',
    'about.title': 'L’éclat d’une étoile, la rigueur d’un atelier.',
    'about.p1': 'Regulus, « petit roi » en latin, est l’étoile la plus brillante de la constellation du Lion. Elle a donné son nom à la maison : une lumière précise et constante, qui guide sans en faire trop.',
    'about.p2': 'Maison Regulus conçoit des portfolios pour les étudiants et les professionnels, et des sites vitrines pour les entreprises et les commerces, tous sur mesure. Chaque site est pensé à votre image : votre valeur, votre métier, vos préférences.',
    'about.p3': 'Votre site est suivi de près, du premier échange à la livraison.',
    'about.s1.t': 'Écouter et cadrer',
    'about.s1.d': 'Nous cadrons vos objectifs et les pages du site.',
    'about.s2.t': 'Concevoir avec vous',
    'about.s2.d': 'Vous validez la structure et le design du site.',
    'about.s3.t': 'Vérifier à chaque étape',
    'about.s3.d': 'Nous vérifions chaque étape avant livraison.',
    'about.s4.t': 'Rester joignables',
    'about.s4.d': 'Nous restons joignables jusqu’à la livraison.',
    'about.cta': 'Discuter de mon projet',
    'svc.eyebrow': 'Services',
    'svc.title': 'Deux formules, une même exigence.',
    'svc.intro': 'Que vous présentiez votre parcours ou votre activité, chaque site est conçu sur mesure et adapté aux mobiles comme aux ordinateurs.',
    'svc.p.title': 'Portfolio',
    'svc.p.for': 'Étudiants & professionnels',
    'svc.p.desc': 'Un site personnel pour valoriser votre parcours, vos projets et vos compétences, et vous rendre facile à contacter.',
    'svc.p.i1': 'Présentation et parcours',
    'svc.p.i2': 'Galerie de projets',
    'svc.p.i3': 'CV téléchargeable',
    'svc.p.i4': 'Formulaire de contact et liens réseaux',
    'svc.p.i5': 'Adapté aux mobiles et ordinateurs',
    'svc.v.title': 'Site Vitrine',
    'svc.v.for': 'Entreprises & commerces',
    'svc.v.desc': 'Une présence professionnelle en ligne pour présenter votre activité et donner à vos clients un moyen simple de vous contacter.',
    'svc.v.i1': 'Présentation de votre activité',
    'svc.v.i2': 'Vos services ou produits mis en valeur',
    'svc.v.i3': 'Formulaire de contact et bouton WhatsApp',
    'svc.v.i4': 'Localisation et horaires',
    'svc.v.i5': 'Adapté aux mobiles et ordinateurs',
    'svc.priceLabel': 'Tarif',
    'svc.price': 'Sur devis',
    'work.eyebrow': 'Réalisations',
    'work.title': 'Les premières étoiles de notre constellation.',
    'work.p1.visualAria': 'Voir le site niriantsoa.me (nouvel onglet)',
    'work.p1.type': 'Portfolio',
    'work.live': 'En ligne',
    'work.p1.role': 'Astronome · Enseignante · Entrepreneure',
    'work.p1.desc': 'Un portfolio bilingue qui valorise un parcours entre astronomie, enseignement et entrepreneuriat : projets de recherche, applications, CV et contact.',
    'work.p1.t1': 'Bilingue FR / EN',
    'work.p1.t2': 'Projets filtrables',
    'work.p1.t3': 'CV téléchargeable',
    'work.p1.t4': 'Écran d’accueil animé',
    'work.p1.t5': 'Adapté aux mobiles',
    'work.p1.t6': 'Musique d’ambiance intégrée',
    'work.visit': 'Visiter le site',
    'work.next': 'Votre projet sera la prochaine étoile.',
    'ct.eyebrow': 'Contact',
    'ct.title': 'Un projet en tête ? Écrivons la suite ensemble.',
    'ct.lead': 'Parlez-nous de vous et de votre idée : nous revenons vers vous avec une proposition pensée pour votre projet.',
    'ct.formTitle': 'Écrivez-nous',
    'ct.step1': 'Faisons connaissance',
    'ct.name': 'Votre nom',
    'ct.company': 'Entreprise ou activité',
    'ct.email': 'Votre e-mail',
    'ct.phone': 'Téléphone ou WhatsApp',
    'ct.step2': 'Votre projet',
    'ct.typeAria': 'Type de projet',
    'ct.unsure': 'Je ne sais pas encore',
    'ct.message': 'Parlez-nous de votre idée',
    'ct.note': 'Vos informations servent uniquement à vous répondre.',
    'ct.send': 'Envoyer le message',
    'ct.doneTitle': 'Message envoyé.',
    'ct.doneText': 'Merci ! Nous avons bien reçu votre message et nous vous répondons très vite à l’adresse indiquée.',
    'ct.again': 'Envoyer un autre message',
    'ct.errInvalid': 'Merci de remplir les champs marqués d’une étoile, avec une adresse e-mail valide.',
    'ct.errSend': 'L’envoi n’a pas abouti. Réessayez dans un instant, ou écrivez-nous directement à contact@regulus-studio.tech.',
    'ft.navAria': 'Navigation du pied de page',
    'ft.nav': 'Navigation',
    'ft.rights': 'Tous droits réservés.',
    'ft.made': 'Conçu avec soin.',
    'ft.up': 'Retour en haut',
    'ft.upAria': 'Retour à l’accueil',
    'svc.after.t': 'Après la livraison',
    'svc.after.d': 'Hébergement, nom de domaine et maintenance sont proposés en option. Leur coût et leurs modalités sont précisés selon votre projet.',
  },
  en: {
    'meta.title': 'Maison Regulus — Bespoke portfolios & websites',
    'logo.src': 'assets/logo-en.svg',
    'logo.alt': 'Maison Regulus — Portfolios & websites',
    'hero.sub': 'Portfolios & websites',
    'skip': 'Skip to content',
    'work.p1.alt': 'Home page of Niriantsoa Francia Raheriniaina’s portfolio on desktop',
    'meta.description': 'Maison Regulus: bespoke websites, made in your image. Portfolios for students and professionals, business websites for companies and shops.',
    'nav.aria': 'Main navigation',
    'brand.aria': 'Maison Regulus — home',
    'lang.aria': 'Language',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'cta.contact': 'Get in touch',
    'hero.lead': 'A house crafting bespoke websites, made in your image.',
    'cta.quote': 'Request a quote',
    'cta.work': 'See our work',
    'offer1.meta': 'Students & professionals',
    'offer2.title': 'Business Website',
    'offer2.meta': 'Companies & shops',
    'fab.wa': 'Quick reply',
    'fab.mail': 'Email',
    'fab.toggle': "Let's talk",
    'about.eyebrow': 'About',
    'about.title': 'The brilliance of a star, the rigour of a workshop.',
    'about.p1': 'Regulus, Latin for “little king”, is the brightest star in the constellation Leo. It gave the house its name: a precise, steady light that guides without overdoing it.',
    'about.p2': 'Maison Regulus designs bespoke portfolios for students and professionals, and business websites for companies and shops. Every site is made in your image: your value, your craft, your preferences.',
    'about.p3': 'Your website is followed closely, from our first conversation to delivery.',
    'about.s1.t': 'Listen and define',
    'about.s1.d': 'We define your goals and the pages of your site.',
    'about.s2.t': 'Design it with you',
    'about.s2.d': 'You approve the structure and design of the site.',
    'about.s3.t': 'Check every step',
    'about.s3.d': 'We check every step before delivery.',
    'about.s4.t': 'Stay reachable',
    'about.s4.d': 'We stay reachable all the way to delivery.',
    'about.cta': 'Discuss my project',
    'svc.eyebrow': 'Services',
    'svc.title': 'Two offers, one standard.',
    'svc.intro': 'Whether you are presenting your journey or your business, every site is made to measure and works on mobile and desktop alike.',
    'svc.p.title': 'Portfolio',
    'svc.p.for': 'Students & professionals',
    'svc.p.desc': 'A personal website to showcase your journey, your projects and your skills, and make you easy to reach.',
    'svc.p.i1': 'About you and your journey',
    'svc.p.i2': 'Project gallery',
    'svc.p.i3': 'Downloadable CV',
    'svc.p.i4': 'Contact form and social links',
    'svc.p.i5': 'Built for mobile and desktop',
    'svc.v.title': 'Business Website',
    'svc.v.for': 'Companies & shops',
    'svc.v.desc': 'A professional online presence to introduce your business and give your customers a simple way to reach you.',
    'svc.v.i1': 'Presentation of your business',
    'svc.v.i2': 'Your services or products showcased',
    'svc.v.i3': 'Contact form and WhatsApp button',
    'svc.v.i4': 'Location and opening hours',
    'svc.v.i5': 'Built for mobile and desktop',
    'svc.priceLabel': 'Pricing',
    'svc.price': 'On quote',
    'work.eyebrow': 'Work',
    'work.title': 'The first stars of our constellation.',
    'work.p1.visualAria': 'View niriantsoa.me (new tab)',
    'work.p1.type': 'Portfolio',
    'work.live': 'Live',
    'work.p1.role': 'Astronomer · Teacher · Entrepreneur',
    'work.p1.desc': 'A bilingual portfolio showcasing a journey across astronomy, teaching and entrepreneurship: research projects, apps, CV and contact.',
    'work.p1.t1': 'Bilingual FR / EN',
    'work.p1.t2': 'Filterable projects',
    'work.p1.t3': 'Downloadable CV',
    'work.p1.t4': 'Animated welcome screen',
    'work.p1.t5': 'Mobile-friendly',
    'work.p1.t6': 'Built-in background music',
    'work.visit': 'Visit the site',
    'work.next': 'Your project will be the next star.',
    'ct.eyebrow': 'Contact',
    'ct.title': 'Got a project in mind? Let’s write what comes next.',
    'ct.lead': 'Tell us about yourself and your idea: we will come back to you with a proposal designed for your project.',
    'ct.formTitle': 'Write to us',
    'ct.step1': 'Let’s get acquainted',
    'ct.name': 'Your name',
    'ct.company': 'Company or activity',
    'ct.email': 'Your email',
    'ct.phone': 'Phone or WhatsApp',
    'ct.step2': 'Your project',
    'ct.typeAria': 'Project type',
    'ct.unsure': 'Not sure yet',
    'ct.message': 'Tell us about your idea',
    'ct.note': 'Your details are only used to reply to you.',
    'ct.send': 'Send message',
    'ct.doneTitle': 'Message sent.',
    'ct.doneText': 'Thank you! We have received your message and will reply very soon to the address you gave.',
    'ct.again': 'Send another message',
    'ct.errInvalid': 'Please fill in the fields marked with a star, with a valid email address.',
    'ct.errSend': 'Your message could not be sent. Please try again shortly, or write to us directly at contact@regulus-studio.tech.',
    'ft.navAria': 'Footer navigation',
    'ft.nav': 'Navigation',
    'ft.rights': 'All rights reserved.',
    'ft.made': 'Crafted with care.',
    'ft.up': 'Back to top',
    'ft.upAria': 'Back to home',
    'svc.after.t': 'After delivery',
    'svc.after.d': 'Hosting, domain name and maintenance are available as options. Their cost and terms depend on your project.',
  },
};

function setLang(lang) {
  const t = i18n[lang] ? i18n[lang] : i18n.fr;
  lang = i18n[lang] ? lang : 'fr';

  document.documentElement.lang = lang;
  document.title = t['meta.title'];
  document.querySelector('meta[name="description"]').content = t['meta.description'];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t[el.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    el.alt = t[el.dataset.i18nAlt];
  });
  document.querySelectorAll('[data-i18n-src]').forEach((el) => {
    el.src = t[el.dataset.i18nSrc];
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  try { localStorage.setItem('lang', lang); } catch (e) { /* stockage indisponible */ }
}

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Langue choisie : ?lang=en dans l'adresse, sinon le dernier choix, sinon français
let initialLang = new URLSearchParams(location.search).get('lang');
if (!initialLang) {
  try { initialLang = localStorage.getItem('lang'); } catch (e) { /* stockage indisponible */ }
}
if (initialLang && initialLang !== 'fr') setLang(initialLang);

// Menu mobile
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) {
    setMenu(false);
    toggle.focus();
  }
});

// Si l'écran s'élargit menu ouvert (rotation, redimensionnement), on le referme
matchMedia('(min-width: 961px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

// Bouton de contact flottant
const fab = document.querySelector('.contact-fab');
const fabToggle = fab.querySelector('.contact-fab__toggle');

function setFab(open) {
  fab.classList.toggle('is-open', open);
  fabToggle.setAttribute('aria-expanded', String(open));
}

// Le bouton se pose au-dessus du bandeau des offres tant qu'il est à l'écran
const offers = document.querySelector('.offers');
let liftFrame = 0;

function updateFabLift() {
  cancelAnimationFrame(liftFrame);
  liftFrame = requestAnimationFrame(() => {
    const r = offers.getBoundingClientRect();
    const vh = window.innerHeight;
    const lift = Math.max(0, Math.min(vh, r.bottom) - Math.max(0, r.top));
    fab.style.setProperty('--fab-lift', `${Math.round(lift)}px`);
  });
}

updateFabLift();
window.addEventListener('scroll', updateFabLift, { passive: true });
window.addEventListener('resize', updateFabLift);
offers.addEventListener('animationend', updateFabLift); // après l'entrée des offres

fabToggle.addEventListener('click', () => {
  setFab(!fab.classList.contains('is-open'));
});

document.addEventListener('click', (e) => {
  if (!fab.contains(e.target)) setFab(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && fab.classList.contains('is-open')) {
    setFab(false);
    fabToggle.focus();
  }
});

// Parallaxe du ciel (souris uniquement, sauf si mouvements réduits)
const hero = document.querySelector('.hero');
const sky = document.querySelector('.hero__sky');
const finePointer = matchMedia('(pointer: fine)').matches;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Curseur lumineux : le point suit la souris, l'anneau le rattrape en douceur
const cursor = document.querySelector('.cursor');

if (finePointer && matchMedia('(hover: hover)').matches) {
  const dot = cursor.querySelector('.cursor__dot');
  const ring = cursor.querySelector('.cursor__ring');
  const follow = reduceMotion ? 1 : 0.18; // part du chemin parcourue par l'anneau à chaque image
  let mx = 0, my = 0, rx = 0, ry = 0, started = false, running = false;

  document.documentElement.classList.add('has-cursor');

  document.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!started) {
      rx = mx; ry = my;
      started = true;
    }
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    cursor.classList.add('is-visible');
    cursor.classList.toggle('is-hover', !!e.target.closest('a, button, label, [role="button"]'));
  });

  function loop() {
    rx += (mx - rx) * follow;
    ry += (my - ry) * follow;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    if (Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1) {
      running = false; // au repos : plus de calcul à chaque image
      return;
    }
    requestAnimationFrame(loop);
  }

  document.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
  document.addEventListener('pointerup', () => cursor.classList.remove('is-down'));
  document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
}

if (finePointer && !reduceMotion) {
  let frame = 0;
  hero.addEventListener('pointermove', (e) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const r = hero.getBoundingClientRect();
      sky.style.setProperty('--px', ((e.clientX - r.left) / r.width * 2 - 1).toFixed(3));
      sky.style.setProperty('--py', ((e.clientY - r.top) / r.height * 2 - 1).toFixed(3));
    });
  });
}

// Apparition des éléments au défilement
const revealEls = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('has-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => revealObserver.observe(el));
}

// Formulaire de contact : envoi gratuit via FormSubmit, sans quitter la page
const contactForm = document.getElementById('contact-form');
const letterDone = document.querySelector('.letter__done');
const letterStatus = contactForm.querySelector('.letter__status');

function tr(key) {
  const lang = i18n[document.documentElement.lang] ? document.documentElement.lang : 'fr';
  return i18n[lang][key];
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  letterStatus.textContent = '';

  if (!contactForm.checkValidity()) {
    contactForm.classList.add('was-validated');
    letterStatus.textContent = tr('ct.errInvalid');
    contactForm.querySelector(':invalid').focus();
    return;
  }

  contactForm.classList.add('is-sending');
  try {
    const res = await fetch('https://formsubmit.co/ajax/contact@regulus-studio.tech', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(contactForm),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || res.status);

    contactForm.reset();
    contactForm.classList.remove('was-validated');
    contactForm.hidden = true;
    letterDone.hidden = false;
    letterDone.focus();
  } catch (err) {
    letterStatus.textContent = tr('ct.errSend');
  } finally {
    contactForm.classList.remove('is-sending');
  }
});

letterDone.querySelector('.letter__again').addEventListener('click', () => {
  letterDone.hidden = true;
  contactForm.hidden = false;
  contactForm.querySelector('input:not([type="hidden"]):not(.letter__honey)').focus();
});

// Masque le bouton de contact flottant sur la section Contact et le footer
if ('IntersectionObserver' in window) {
  const inView = new Set();
  const fabObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) inView.add(entry.target);
      else inView.delete(entry.target);
    });
    document.body.classList.toggle('contact-in-view', inView.size > 0);
    // Le footer a son propre « Retour en haut » : la flèche flottante s'efface
    document.body.classList.toggle('footer-in-view', [...inView].some((el) => el.matches('.footer')));
    if (inView.size > 0) setFab(false);
  }, { threshold: 0.15 });
  fabObserver.observe(document.getElementById('contact'));
  fabObserver.observe(document.querySelector('.footer'));
}

// Flèche de retour à l'accueil : visible après le hero, l'anneau suit la progression
const toTop = document.querySelector('.to-top');
const toTopRing = toTop.querySelector('.to-top__ring circle');
let toTopFrame = 0;

function updateToTop() {
  cancelAnimationFrame(toTopFrame);
  toTopFrame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    toTop.classList.toggle('is-shown', window.scrollY > window.innerHeight * 0.6);
    toTopRing.style.strokeDashoffset = String(1 - progress);
  });
}

updateToTop();
window.addEventListener('scroll', updateToTop, { passive: true });
window.addEventListener('resize', updateToTop);

toTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  history.replaceState(null, '', location.pathname + location.search);
});

// « Demander un devis » d'un service : présélectionne ce type de projet dans le formulaire
document.querySelectorAll('[data-project]').forEach((link) => {
  link.addEventListener('click', () => {
    const radio = contactForm.querySelector(`input[name="project_type"][value="${link.dataset.project}"]`);
    if (radio) radio.checked = true;
  });
});

// Année du copyright toujours à jour
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
