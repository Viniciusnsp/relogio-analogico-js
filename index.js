const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
  let hh = new Date().getHours() * 30;
  let mm = new Date().getMinutes() * 6;
  let ss = new Date().getSeconds() * 6;



  hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
  min.style.transform = `rotateZ(${(mm)}deg)`;
  sec.style.transform = `rotateZ(${(ss)}deg)`;
});

