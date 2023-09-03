class CardSet{
  name: string;
  path: string;
  quantity: number;
  maxBoardSize: number;

  constructor(path: string, name: string, quantity: number) {
    this.path = path;
    this.name = name;
    this.quantity = quantity;  
    this.maxBoardSize = (Math.floor(Math.sqrt(quantity))% 2 === 0) ? Math.floor(Math.sqrt(quantity)) : Math.floor(Math.sqrt(quantity)) - 1;
  }

  public getMaxBoardSize(){
    return this.maxBoardSize;
  }
}

class BoardGame {
  countCoupels;
  cards : Array<number>;
  set: CardSet;
  couples:number;

  constructor(boardSize: number, set:CardSet) {
    this.couples = (boardSize*boardSize)/2;
    this.set = set;
    this.cards = this.boardInit(boardSize);
    this.countCoupels = 0;
  }
  

  private boardInit(n:number):Array<number>{
    const boardSize = Math.pow(n,2);
    let arrayOfCards = new Array(boardSize).fill(0).map((_, i) => {
      if(i > ((boardSize/2)- 1))
       {return  i - (boardSize/2) ;} 
      else 
      {return  i; }
    } );
    this.randomizeCard(arrayOfCards);
    return arrayOfCards;
  }


  private randomizeCard(arrayOfCards: Array<number>) :void{
    const len = arrayOfCards.length;
    for(let i =0; i < len; i++){
      let randomIndex = Math.floor(Math.random() * (len - i) );
      [arrayOfCards[i], arrayOfCards[randomIndex]] = [arrayOfCards[randomIndex], arrayOfCards[i]];
    }
  }
  

  public gameStart(){
    this.creatBoard(this.cards);

    let openCards = new Map();
    const card_fronts = document.querySelectorAll(`.${this.set.name}-card_front`);
    const card_front_img = document.querySelectorAll(`.${this.set.name}-card_front img`);
    
    card_front_img.forEach((card_front_img, i) => {
      setTimeout(() => {
        card_front_img.classList.add('hide')
      }, i * 500); 
    });
    
  
    card_fronts.forEach(card_front => {
      card_front.addEventListener('click',(event)  => {
        const targetElemnt = event.target as HTMLElement;
        const childN = targetElemnt.firstChild as HTMLElement;
  
        childN.classList.toggle('hide');
        if(openCards.size < 2){
          if(openCards.has(targetElemnt.id)){
            openCards.delete(targetElemnt.id);
            setTimeout(() => {
              this.counter();
            }, 150);
          }else{
            openCards.set(targetElemnt.id, childN);
          }
        }else{
          openCards.forEach((value) => {value.classList.toggle('hide');})
          openCards.clear();
          openCards.set(targetElemnt.id, childN);
        }
      })
    })
  
  };


  private counter(){
    this.countCoupels+=2;
    if(this.countCoupels === this.cards.length){
      alert(`Game Over in set ${this.set.name}`);
    }
  }

  
  private creatBoard(arrayOfCards: Array<number>){
    const main = document.querySelector('.main');
    const board = document.createElement('div');
    const len = arrayOfCards.length;
    board.style.borderRadius = '5px';
    main?.appendChild(board);
    main?.classList.add('board');
  
  
    this.addFlexContainer(board, len);
  
    for (let i = 0; i < len; i++) {
      const card_front = document.createElement('div');

  
      const card_front_img = document.createElement('img');
  
      card_front.classList.add(`${this.set.name}-card_front`);
      card_front.setAttribute('id', `${arrayOfCards[i]}`);
      card_front.appendChild(card_front_img);
      card_front_img.setAttribute('src', `${this.set.path}${arrayOfCards[i]}.png`);
  
      this.addFlexItem(card_front, arrayOfCards.length);
      card_front.style.backgroundColor = 'lightgreen';

      board.appendChild(card_front);
      card_front_img.style.objectFit = 'contain';
      card_front_img.style.width = '100%';
      card_front_img.style.height = '100%';
      card_front_img.style.borderRadius = '5px';
      card_front_img.style.backgroundColor = 'white';

  
    }
  }


private addFlexContainer(elem: HTMLElement, n: number) {
  const width = Math.sqrt(n);
  elem.style.display = 'grid';
  elem.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  elem.style.gridTemplateRows = `repeat(${width},${(85/width)-.05}vh)`;
  elem.style.justifyContent = 'center';
  elem.style.alignItems = 'center';
  elem.style.gap = '5px';
  elem.style.width = '60vw';
  elem.style.height = 'max(85vh, auto)';
  elem.style.backgroundColor = '#333333';
  elem.style.boxSizing = 'border-box';
  elem.style.marginBottom = '30px';
  this.addBorderStyle(elem);

}

private addFlexItem(elem: HTMLElement, n: number) {
    let width = `${100 / Math.sqrt(n)}%`;
    elem.style.backgroundColor = 'white';
    elem.style.boxSizing = 'border-box';
    elem.style.width = '100%';
    elem.style.height = '100%';
    elem.style.display = 'flex';
    elem.style.justifyContent = 'center';
    elem.style.alignItems = 'center';
    elem.style.borderRadius = '5px';
    
    this.addBorderStyle(elem);
  }

private addBorderStyle(elem:HTMLElement) {
    elem.style.border = '1px solid #333333';
  }
}

class CardSets{
  sets: Array<CardSet>;

  constructor(){
    this.sets = [];
  }
  addSet(set:CardSet){
    this.sets.push(set);
  }
}




function generateForm(setOfCards:CardSets) {
  const form = document.createElement('form');
  form.id = 'gameInfo';
  
  const selectCatLabel = document.createElement('label');
  selectCatLabel.htmlFor = 'category';
  selectCatLabel.textContent = 'Select a puzzle category:';
  
  const selectCat = document.createElement('select');
  selectCat.id = 'category';
  selectCat.name = 'category';
  
  const categories = ['vegetables', 'flowers', 'people', 'animal'];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    selectCat.appendChild(option);
  });


  const selectSizeLabel = document.createElement('label');
  selectSizeLabel.htmlFor = 'size';
  selectSizeLabel.textContent = 'Select a puzzle size:';

  const selectSize = document.createElement('select');
  selectSize.id = 'size';
  selectSize.name = 'size';

  selectCat.addEventListener('change',(ev) => {
    
    const setName = setOfCards.sets.find(set => set.name === selectCat.value);
    if(setName === undefined) return;
    let size = setName.getMaxBoardSize();
    if(selectSize.hasChildNodes()){
      selectSize.innerText = '';
    }
    for (size; size>0; size -= 2) {
      const option = document.createElement('option');
      option.value = size.toString();
      option.textContent = `${size}X${size}`;
      selectSize.appendChild(option);
    }

  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  
  form.appendChild(selectCatLabel);
  form.appendChild(selectCat);
  form.appendChild(selectSizeLabel);
  form.appendChild(selectSize);

  form.appendChild(submitButton);
  const infoDiv = document.querySelector('.info');
  infoDiv?.appendChild(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const board = new BoardGame(parseInt(selectSize.value), setOfCards.sets.find(set => set.name === selectCat.value));
    board.gameStart();
  });
}

const body = document.querySelector('body');
const main = document.createElement('div');
const info = document.createElement('div');
info.style.gridArea = 'info'
info.classList.add('info');

main.classList.add('main');
body?.appendChild(main);
body?.appendChild(info);

const animal = new CardSet('./dist/animal/','animal' ,50 );

const vegetables = new CardSet('./dist/veg/','vegetables' ,28 );
const people = new CardSet('./dist/people/','people' ,25 );
const flowers = new CardSet('./dist/flowers/','flowers' ,50 ); 

// const board1 = new BoardGame(4, animal);
// board1.gameStart();

const setOfCards1 = new CardSets();

setOfCards1.addSet(vegetables);
setOfCards1.addSet(people);
setOfCards1.addSet(flowers);
setOfCards1.addSet(animal);

generateForm(setOfCards1);




// const veg = new CardSet('./dist/veg/','veg' ,48 );
// const board2 = new BoardGame(4, veg);
// board2.gameStart();

// const people = new CardSet('./dist/people/','people' ,48 );
// const board3 = new BoardGame(4, people);
// board3.gameStart();

// const flowers = new CardSet('./dist/flowers/','flowers' ,48 );
// const board4 = new BoardGame(4, flowers);
// board4.gameStart();