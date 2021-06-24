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
