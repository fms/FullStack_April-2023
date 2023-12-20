const colors = document.querySelectorAll('.colors');

const selectButton = document.querySelector('#selectButton') as HTMLButtonElement;
const colorSelect = document.querySelector('#colorSelect') as HTMLSelectElement;

const BGButton = document.querySelector('#BGButton') as HTMLButtonElement;
const BGSelect = document.querySelector('#BGSelect') as HTMLSelectElement;

const FSButton = document.querySelector('#FSButton') as HTMLButtonElement;
const FSSelect = document.querySelector('#FSSelect') as HTMLSelectElement;

let savedBackGround = 'currentBG';
let savedColor = 'currentColor';
let fontSizeKey = 'currentFSize';

FSButton.addEventListener('click', () => {
    const selectedFS = FSSelect.value;
    document.body.style.fontSize = `${selectedFS}px`;
    saveFSToLS(selectedFS);
});

function saveFSToLS(fontsize: string) {
    localStorage.setItem(fontSizeKey, fontsize);
}

function loadFS() {
    const saved = localStorage.getItem(fontSizeKey);
    if (saved) {
        document.body.style.fontSize = `${saved}px`;
    }
}

BGButton.addEventListener('click', () => {
    const selectedBG = BGSelect.value;
    document.body.style.backgroundImage = `url('${selectedBG}')`;
    saveBGToLS(selectedBG);
});

function saveBGToLS(background: string) {
    localStorage.setItem(savedBackGround, background);
}


selectButton.addEventListener('click', () => {
    const selectedColor = colorSelect.value;
    document.body.style.color = selectedColor;
    saveColorToLS(selectedColor);
    location.reload();
});

function saveColorToLS(color: string) {
    localStorage.setItem(savedColor, color);
}


function loadColor() {
    const boxShadow = document.querySelector('.cover') as HTMLElement;
    const buttons = document.querySelectorAll('button');
    const saved = localStorage.getItem(savedColor);
    if (saved) {
        document.body.style.color = saved;
        boxShadow.style.boxShadow = `1px 1px 15px ${saved}`;
        buttons.forEach(button => {
            button.style.boxShadow = `1px 1px 15px ${saved}`;
            button.style.color = saved;
        });
    }
  }

loadColor();
loadFS();


