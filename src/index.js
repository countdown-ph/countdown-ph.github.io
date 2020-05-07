import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let date = new Date("2020,07,31 00:00");
document.getElementById("date").innerHTML = date.toLocaleDateString();

setInterval(() => {
  let now = new Date().getTime();
  let distance = date.getTime() - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = pad2(seconds);
}, 1000);

// function convert 0 to 00
const pad2 = number => {
  return (number < 10 ? "0" : "") + number;
};
