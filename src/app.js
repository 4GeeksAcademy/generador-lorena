import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//cambio nombres de variables de español a ingles, di formato al codigo, elimine comentarios innecesarios//
function randomNum(max) {
  return Math.floor(Math.random() * max);
}
function getNumber(random) {
  let max = random.length - 1;

  let num = randomNum(max);
  return random[num];
}
window.onload = function () {


  document.getElementById('excuse').innerHTML = getNumber(who) + " " + getNumber(action) + " " + getNumber(what) + " " + getNumber(when);
};