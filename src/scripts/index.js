// The following line makes sure your styles are included in the project. Don't remove this.
// import "../styles/main.scss";

// Import any additional modules you want to include below \/
import moment from "../../node_modules/moment";

// \/ All of your javascript should go here \/
const days = moment().format("LL");
const days_left = document.getElementById("days_left");
days_left.innerText = days;

const hours = moment().endOf("day").fromNow();
const hours_left = document.getElementById("hours_left");
hours_left.innerHTML = hours;

const minutes = moment().endOf("hour").fromNow();
const minutes_left = document.getElementById("minutes_left");
minutes_left.innerHTML = minutes;

const seconds = moment().endOf("minutes").fromNow();
const seconds_left = document.getElementById("seconds_left");
seconds_left.innerHTML = seconds;

// script countdown function
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
