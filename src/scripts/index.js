// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";

// Import any additional modules you want to include below \/
import moment from "moment";

// \/ All of your javascript should go here \/
const days = moment().format("Do");
const days_left = document.getElementById("days_left");
days.innerHTML = days_left;

const hours = moment().format("h");
const hours_left = document.getElementById("hours_left");
hours.innerHTML = hours_left;

const minutes = moment().format("mm");
const minutes_left = document.getElementById("minutes_left");
minutes.innerHTML = minutes_left;

const seconds = moment().format("ss");
const seconds_left = document.getElementById("seconds_left");
seconds.innerHTML = seconds_left;

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
