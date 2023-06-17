const timer = document.querySelector('#timerClock');
let miliseconds = '00';
let seconds = '00';
let minutes = '00';
const failedMessage = document.getElementById("falied-message");
const ballons = document.querySelectorAll(".balloon");

const count = setInterval(() => {
  miliseconds++
  timer.innerHTML = `${minutes}:${seconds}:${miliseconds}`;
  if (miliseconds == 99) {
    miliseconds = 0;
    seconds++
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

}, 10);

ballons.forEach(item => {
  item.addEventListener('animationend', e => {
    // alert(`You failed, your time is: ${minutes}:${seconds}:${miliseconds}`);
    // document.getElementById("failed-div").style.display = "flex";
    console.log(e);
    document.getElementById('failed-div').style.display="flex";
    document.getElementById('failed-div').style.zIndex="3";
    failedMessage.innerHTML = `You failed, your time is: ${minutes}:${seconds}:${miliseconds}`;
    clearInterval(count);

  })
});