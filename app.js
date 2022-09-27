// https://www.omnicalculator.com/everyday-life/speed

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const speedRadio = document.getElementById('speedRadio');
const distanceRadio = document.getElementById('distanceRadio');
const timeRadio = document.getElementById('timeRadio');

let speed;
let distance = v1;
let time = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

speedRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance';
  variable2.textContent = 'Time';
  distance = v1;
  time = v2;
  result.textContent = '';
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Speed';
  variable2.textContent = 'Time';
  speed = v1;
  time = v2;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Speed';
  variable2.textContent = 'Distance';
  speed = v1;
  distance = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(speedRadio.checked)
    result.textContent = `Speed = ${computespeed().toFixed(2)}`;

  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computedistance().toFixed(2)}`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computetime().toFixed(2)}`;
})

// calculation

function computespeed() {
  return Number(distance.value) / Number(time.value);
}

function computedistance() {
  return Number(speed.value) * Number(time.value);
}

function computetime() {
  return Number(distance.value) / Number(speed.value);
}