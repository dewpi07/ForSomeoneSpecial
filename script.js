// Tanggal mulai kenal: ganti sesuai kenyataan (YYYY-MM-DD)
const START='2026-09-21';
// Kalimat kejutan: ganti sesukamu
const MSGS=['Kamu tuh bikin hari biasa jadi seru.','Ketawamu itu obat paling ampuh.','Terima kasih sudah jadi kamu.','Semoga harimu semanis senyummu.','Kamu lebih hebat dari yang kamu kira.'];

document.getElementById('days').textContent=Math.max(0,Math.floor((Date.now()-new Date(START))/864e5)).toLocaleString('id-ID')+' hari';

let n=0;
document.getElementById('surprise').onclick=()=>{document.getElementById('msg').textContent=MSGS[n++%MSGS.length]};

const root=document.documentElement,tb=document.getElementById('theme');
tb.onclick=()=>{const dark=root.dataset.theme==='dark'||(!root.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);root.dataset.theme=dark?'light':'dark';tb.textContent=dark?'🌙':'☀️'};

const aud=document.getElementById('aud'),pb=document.getElementById('play'),am=document.getElementById('audmsg');
pb.onclick=()=>{
  if(aud.paused){
    am.textContent='Memuat lagu...';
    const p=aud.play();
    if(p&&p.catch)p.catch(e=>{am.textContent=(e&&e.name==='NotAllowedError')?'Ketuk tombolnya sekali lagi ya.':'Lagu belum bisa diputar. Pastikan musik.mp3 ikut ter-upload.'});
  }else{aud.pause()}
};
aud.addEventListener('playing',()=>{pb.textContent='⏸ Jeda';am.textContent=''});
aud.addEventListener('pause',()=>{pb.textContent='▶ Putar'});
aud.addEventListener('ended',()=>{pb.textContent='▶ Putar'});
aud.addEventListener('error',()=>{am.textContent='Lagu gagal dimuat. Pastikan musik.mp3 ada di folder yang sama dan ikut ter-upload.'});
