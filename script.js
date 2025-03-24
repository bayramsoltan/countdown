const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("secs");

const newYear = new Date("1 Jan 2026");

function countDown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const TotalsecondsLeft = Math.floor((newYearsDate - currentDate) / 1000);

  const daysLeft = Math.floor(TotalsecondsLeft / 3600 / 24);

  const hoursLeft = Math.floor((TotalsecondsLeft / 3600) % 24);

  const minutesLeft = Math.floor((TotalsecondsLeft / 60) % 60);

  const secondsLeft = Math.floor(TotalsecondsLeft % 60);

  console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

  days.innerHTML = daysLeft;
  hours.innerHTML = formatTime(hoursLeft);
  minutes.innerHTML = formatTime(minutesLeft);
  seconds.innerHTML = formatTime(secondsLeft);


}
function formatTime(time){
    return time < 10 ? `0${time}`:time;
}

countDown();



setInterval(countDown, 1000);