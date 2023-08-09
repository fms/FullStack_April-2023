const body = document.body;
body.style.backgroundColor = 'gray';
body.style.opacity = '70%';

class Shaked {
    constructor(public arr: string[], public img: string, public color: string) {
        this.arr = arr;
        this.img = img;
        this.color = color;
    }
}
const cars = [
    new Shaked(['Hyundai'], 'https://car-images.bauersecure.com/wp-images/4148/hyundai_tucson_104.jpg', 'gold'),
    new Shaked(['BMW'], 'https://static.wixstatic.com/media/d94c66_877a9005f9e74e1083fdc2f552557932~mv2.jpeg/v1/fit/w_1000%2Ch_720%2Cal_c%2Cq_80/file.jpeg', 'red'),
    new Shaked(['Lexus'], 'https://lexusenthusiast.com/images/weblog/19-03-20-lexus-is-black-line.jpg', 'black'),
    new Shaked(['Yaguar'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslmaw-IxiziBZvMveeT7R-EwcfHM7tan8Tg&usqp=CAU', 'blue'),
];
const container = document.getElementById('container');

const h1 = document.createElement('h1');
h1.innerText = `Shaked's Cars`;
h1.style.fontSize = `3.5vw`;
h1.style.color ='white';
container.appendChild(h1);

if (container) {
    cars.forEach((instance) => {
        const p = document.createElement('p');
        p.textContent = instance.arr.join(', ');

        //container
        container.style.marginLeft = '40%';
        container.appendChild(p);

        //color
        const color = document.createElement('color');
        p.style.color = instance.color;
        p.style.marginLeft = '15%';
        p.style.fontSize = '1.5vw';
        p.style.fontFamily = '"Roboto", Arial, sans-serif';
        p.style.fontWeight = 'bold';

        //hr
        const hr = document.createElement('hr');
        hr.style.width = '20%';
        hr.style.marginLeft = '9%';
        container.appendChild(hr);

        //img
        const img = document.createElement('img');
        img.height = 150;
        img.width = 300;
        img.src = instance.img;
        img.style.borderRadius = '15%';
        img.style.boxShadow = '1px 1px 30px white'
        container.appendChild(img);
    })
}