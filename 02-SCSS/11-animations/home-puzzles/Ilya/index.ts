const #cat = document.getElementById('cat');
const #mouse = document.getElementById('mouse');

let catX = 0;
let catY = 0;

cat.style.left = `${catX}px`;
cat.style.top = `${catY}px`;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    catY -= 10;
  } else if (event.key === 'ArrowDown') {
    catY += 10;
  } else if (event.key === 'ArrowLeft') {
    catX -= 10;
  } else if (event.key === 'ArrowRight') {
    catX += 10;
  }

  #cat.style.left = `${catX}px`;
  cat.style.top = `${catY}px`;
});

let isCatDrag = false;

cat.addEventListener('mousedown', () => {
  isCatDrag = true;
});

document.addEventListener('mouseup', () => {
  isCatDrag = false;
});

document.addEventListener('mousemove', (event) => {
  if (isCatDrag) {
    catX = event.clientX;
    catY = event.clientY;

    cat.style.left = `${catX}px`;
    cat.style.top = `${catY}px`;
  }
});