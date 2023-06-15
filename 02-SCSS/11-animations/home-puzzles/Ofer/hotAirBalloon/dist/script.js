const timer = document.querySelector('#timerClock');
let miliseconds = '00';
let seconds = '00';
let minutes = '00';
const failedMessage = document.getElementById("falied-message");
const ballons = [document.getElementById("ballon-1"),
  document.getElementById("ballon-2"),
  document.getElementById("ballon-3"),
  document.getElementById("ballon-4"),
  document.getElementById("ballon-5"),
  document.getElementById("ballon-6"),
  document.getElementById("ballon-7"),
  document.getElementById("ballon-8"),
  document.getElementById("ballon-9"),
  document.getElementById("ballon-10")
];

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