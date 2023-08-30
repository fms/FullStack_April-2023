var CardSet = /** @class */ (function () {
    function CardSet(path, name, quantity) {
        this.path = path;
        this.name = name;
        this.quantity = quantity;
        this.maxBoardSize = (Math.floor(Math.sqrt(quantity)) % 2 === 0) ? Math.floor(Math.sqrt(quantity)) : Math.floor(Math.sqrt(quantity)) - 1;
    }
    CardSet.prototype.getMaxBoardSize = function () {
        return this.maxBoardSize;
    };
    return CardSet;
}());
var BoardGame = /** @class */ (function () {
    function BoardGame(boardSize, set) {
        this.couples = (boardSize * boardSize) / 2;
        this.set = set;
        this.cards = this.boardInit(boardSize);
        this.countCoupels = 0;
    }
    BoardGame.prototype.boardInit = function (n) {
        var boardSize = Math.pow(n, 2);
        var arrayOfCards = new Array(boardSize).fill(0).map(function (_, i) {
            if (i > ((boardSize / 2) - 1)) {
                return i - (boardSize / 2);
            }
            else {
                return i;
            }
        });
        this.randomizeCard(arrayOfCards);
        return arrayOfCards;
    };
    BoardGame.prototype.randomizeCard = function (arrayOfCards) {
        var _a;
        var len = arrayOfCards.length;
        for (var i = 0; i < len; i++) {
            var randomIndex = Math.floor(Math.random() * (len - i));
            _a = [arrayOfCards[randomIndex], arrayOfCards[i]], arrayOfCards[i] = _a[0], arrayOfCards[randomIndex] = _a[1];
        }
    };
    BoardGame.prototype.gameStart = function () {
        var _this = this;
        this.creatBoard(this.cards);
        var openCards = new Map();
        var card_fronts = document.querySelectorAll("." + this.set.name + "-card_front");
        var card_front_img = document.querySelectorAll("." + this.set.name + "-card_front img");
        card_front_img.forEach(function (card_front_img, i) {
            setTimeout(function () {
                card_front_img.classList.add('hide');
            }, i * 500);
        });
        card_fronts.forEach(function (card_front) {
            card_front.addEventListener('click', function (event) {
                var targetElemnt = event.target;
                var childN = targetElemnt.firstChild;
                childN.classList.toggle('hide');
                if (openCards.size < 2) {
                    if (openCards.has(targetElemnt.id)) {
                        openCards["delete"](targetElemnt.id);
                        setTimeout(function () {
                            _this.counter();
                        }, 150);
                    }
                    else {
                        openCards.set(targetElemnt.id, childN);
                    }
                }
                else {
                    openCards.forEach(function (value) { value.classList.toggle('hide'); });
                    openCards.clear();
                    openCards.set(targetElemnt.id, childN);
                }
            });
        });
    };
    ;
    BoardGame.prototype.counter = function () {
        this.countCoupels += 2;
        if (this.countCoupels === this.cards.length) {
            alert("Game Over in set " + this.set.name);
        }
    };
    BoardGame.prototype.creatBoard = function (arrayOfCards) {
        var main = document.querySelector('.main');
        var board = document.createElement('div');
        var len = arrayOfCards.length;
        board.style.borderRadius = '5px';
        main === null || main === void 0 ? void 0 : main.appendChild(board);
        main === null || main === void 0 ? void 0 : main.classList.add('board');
        this.addFlexContainer(board, len);
        for (var i = 0; i < len; i++) {
            var card_front = document.createElement('div');
            var card_front_img = document.createElement('img');
            card_front.classList.add(this.set.name + "-card_front");
            card_front.setAttribute('id', "" + arrayOfCards[i]);
            card_front.appendChild(card_front_img);
            card_front_img.setAttribute('src', "" + this.set.path + arrayOfCards[i] + ".png");
            this.addFlexItem(card_front, arrayOfCards.length);
            card_front.style.backgroundColor = 'lightgreen';
            board.appendChild(card_front);
            card_front_img.style.objectFit = 'contain';
            card_front_img.style.width = '100%';
            card_front_img.style.height = '100%';
            card_front_img.style.borderRadius = '5px';
            card_front_img.style.backgroundColor = 'white';
        }
    };
    BoardGame.prototype.addFlexContainer = function (elem, n) {
        var width = Math.sqrt(n);
        elem.style.display = 'grid';
        elem.style.gridTemplateColumns = "repeat(" + width + ", 1fr)";
        elem.style.gridTemplateRows = "repeat(" + width + "," + ((85 / width) - .05) + "vh)";
        elem.style.justifyContent = 'center';
        elem.style.alignItems = 'center';
        elem.style.gap = '5px';
        elem.style.width = '60vw';
        elem.style.height = 'max(85vh, auto)';
        elem.style.backgroundColor = '#333333';
        elem.style.boxSizing = 'border-box';
        elem.style.marginBottom = '30px';
        this.addBorderStyle(elem);
    };
    BoardGame.prototype.addFlexItem = function (elem, n) {
        var width = 100 / Math.sqrt(n) + "%";
        elem.style.backgroundColor = 'white';
        elem.style.boxSizing = 'border-box';
        elem.style.width = '100%';
        elem.style.height = '100%';
        elem.style.display = 'flex';
        elem.style.justifyContent = 'center';
        elem.style.alignItems = 'center';
        elem.style.borderRadius = '5px';
        this.addBorderStyle(elem);
    };
    BoardGame.prototype.addBorderStyle = function (elem) {
        elem.style.border = '1px solid #333333';
    };
    return BoardGame;
}());
var CardSets = /** @class */ (function () {
    function CardSets() {
        this.sets = [];
    }
    CardSets.prototype.addSet = function (set) {
        this.sets.push(set);
    };
    return CardSets;
}());
function generateForm(setOfCards) {
    var form = document.createElement('form');
    form.id = 'gameInfo';
    var selectCatLabel = document.createElement('label');
    selectCatLabel.htmlFor = 'category';
    selectCatLabel.textContent = 'Select a puzzle category:';
    var selectCat = document.createElement('select');
    selectCat.id = 'category';
    selectCat.name = 'category';
    var categories = ['vegetables', 'flowers', 'people', 'animal'];
    categories.forEach(function (category) {
        var option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        selectCat.appendChild(option);
    });
    var selectSizeLabel = document.createElement('label');
    selectSizeLabel.htmlFor = 'size';
    selectSizeLabel.textContent = 'Select a puzzle size:';
    var selectSize = document.createElement('select');
    selectSize.id = 'size';
    selectSize.name = 'size';
    selectCat.addEventListener('change', function (ev) {
        var setName = setOfCards.sets.find(function (set) { return set.name === selectCat.value; });
        if (setName === undefined)
            return;
        var size = setName.getMaxBoardSize();
        if (selectSize.hasChildNodes()) {
            selectSize.innerText = '';
        }
        for (size; size > 0; size -= 2) {
            var option = document.createElement('option');
            option.value = size.toString();
            option.textContent = size + "X" + size;
            selectSize.appendChild(option);
        }
    });
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(selectCatLabel);
    form.appendChild(selectCat);
    form.appendChild(selectSizeLabel);
    form.appendChild(selectSize);
    form.appendChild(submitButton);
    var infoDiv = document.querySelector('.info');
    infoDiv === null || infoDiv === void 0 ? void 0 : infoDiv.appendChild(form);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var board = new BoardGame(parseInt(selectSize.value), setOfCards.sets.find(function (set) { return set.name === selectCat.value; }));
        board.gameStart();
    });
}
var body = document.querySelector('body');
var main = document.createElement('div');
var info = document.createElement('div');
info.style.gridArea = 'info';
info.classList.add('info');
main.classList.add('main');
body === null || body === void 0 ? void 0 : body.appendChild(main);
body === null || body === void 0 ? void 0 : body.appendChild(info);
var animal = new CardSet('./dist/animal/', 'animal', 50);
var vegetables = new CardSet('./dist/veg/', 'vegetables', 28);
var people = new CardSet('./dist/people/', 'people', 25);
var flowers = new CardSet('./dist/flowers/', 'flowers', 50);
// const board1 = new BoardGame(4, animal);
// board1.gameStart();
var setOfCards1 = new CardSets();
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
