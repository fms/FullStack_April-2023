const topButton = document.querySelector('#topButton') as HTMLButtonElement;
topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

let previousPosition = window.scrollY;

window.addEventListener('scroll', () => {
  const currentPosition = window.scrollY;
  if (currentPosition > previousPosition) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
  previousPosition = currentPosition;
});

let savedBackGround = 'currentBG';

function loadBG() {
  const saved = localStorage.getItem(savedBackGround);
  if (saved) {
    document.body.style.backgroundImage = `url('${saved}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }
}

loadBG();
