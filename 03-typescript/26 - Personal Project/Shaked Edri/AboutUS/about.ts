let savedColor = 'currentColor';
let fontSizeKey = 'currentFSize';


function loadColor() {
  const boxShadow = document.querySelector('.cover') as HTMLElement;
  const button = document.querySelector('button') as HTMLButtonElement;
  const saved = localStorage.getItem(savedColor);
  if (saved) {
      document.body.style.color = saved;
      boxShadow.style.boxShadow = `1px 1px 15px ${saved}`;
      button.style.boxShadow = `1px 1px 15px ${saved}`;
      button.style.color = saved;
  }
}

function loadFS() {
  const saved = localStorage.getItem(fontSizeKey);
  if (saved) {
    document.body.style.fontSize = `${saved}px`;
  }
}
loadColor();
loadFS();