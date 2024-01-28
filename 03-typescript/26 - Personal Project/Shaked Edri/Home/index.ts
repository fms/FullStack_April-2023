const grid = document.querySelector('.grid') as HTMLElement;
const collections = document.querySelectorAll('.collection') as NodeListOf<HTMLElement>;
const appleimg = document.querySelector('#apple-img') as HTMLElement;
const lgimg = document.querySelector('#lg-img') as HTMLElement;
const samsungimg = document.querySelector('#samsung-img') as HTMLElement;
const xiaomiimg = document.querySelector('#xiaomi-img');
const asusimg = document.querySelector('#asus-img');
const nokiaimg = document.querySelector('#nokia-img');

const backButton = document.querySelectorAll('.back-button');
backButton.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '../Home/index.html';
    });
});
const images = [appleimg, lgimg, samsungimg, xiaomiimg, asusimg, nokiaimg];
images.forEach((img, index) => {
    img?.addEventListener('click', () => {
        hideGrid();
        collections[index].style.display = 'block';
    });
});

function hideGrid() {
    grid.style.display = 'none';
}

let savedColor = 'currentColor';

function loadColor() {
    const boxShadow = document.querySelector('.cover') as HTMLElement;
    const saved = localStorage.getItem(savedColor);
    if (saved) {
        document.body.style.color = saved;
        document.querySelectorAll('#btitle, .grid img').forEach((element) => {
            if (element instanceof HTMLElement) {
                if (element.id === 'btitle') {
                    element.style.color = saved;
                } else {
                    element.style.boxShadow = `0px 0px 15px ${saved}`;
                }
            }
        });
        (document.querySelectorAll('button') as NodeListOf<HTMLElement>).forEach((e) => {
            e.style.color = `${saved}`, e.style.boxShadow = `0px 0px 15px ${saved}`;
        });
        boxShadow.style.boxShadow = `1px 1px 15px ${saved}`;
    }
}

loadColor();