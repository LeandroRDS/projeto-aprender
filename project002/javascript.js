let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');



setInterval(() => {
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let admdpm = h >-  12? 'PM' : 'AM';

if (h > 12){
    h -= 12;
}

h = (h < 10) ? '0' + h : h;
m = (m < 10) ? '0' + m : m;
s = (s < 10) ? '0' + s : s;

horas.innerHTML = h + '<br> <span>Horas</span>';
minutos.innerHTML = m + '<br> <span>Minutos</span>';;
segundos.innerHTML = s + '<br> <span>Segundos</span>';;
ampm.innerHTML = admdpm

hh.style.strokeDashoffset = 440 - (440 * h) / 12;
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
ss.style.strokeDashoffset = 440 - (440 * s) / 60;

})





//console.log()