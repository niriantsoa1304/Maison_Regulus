import glob,re,subprocess,sys
FF=open('env.sh').read().split('=')[1].strip()
fs=sorted(glob.glob((sys.argv[1] if len(sys.argv)>1 else 'stills')+'/t*.png'),key=lambda f:float(re.findall(r't([\d.]+)\.png',f)[0]))
def sheet(files,out):
    args=[]
    for f in files: args+=['-i',f]
    n=len(files); cols=3
    lay='|'.join(f'{(i%cols)*640}_{(i//cols)*360}' for i in range(n))
    fl=''.join(f'[{i}:v]scale=640:360[v{i}];' for i in range(n))+''.join(f'[v{i}]' for i in range(n))+f'xstack=inputs={n}:layout={lay}:fill=black'
    subprocess.run([FF,'-loglevel','error','-y',*args,'-filter_complex',fl,out],check=True)
for i in range(0,len(fs),9): sheet(fs[i:i+9],f'sheet{i//9}.png')
print(fs)
