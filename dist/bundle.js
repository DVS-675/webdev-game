/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/deck.ts":
/*!********************!*\
  !*** ./js/deck.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deck: () => (/* binding */ Deck)
/* harmony export */ });
const SUITS = ['♠', '♣', '♥', '♦'];
const VALUES = ['A', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }
    get numberOfCards() {
        return this.cards.length;
    }
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
function freshDeck() {
    return SUITS.flatMap((suit) => {
        return VALUES.map((value) => {
            return new Card(suit, value);
        });
    });
}


/***/ }),

/***/ "./js/gameMenu.ts":
/*!************************!*\
  !*** ./js/gameMenu.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameMenu: () => (/* binding */ createGameMenu)
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./js/startGame.ts");

const createGameMenu = () => {
    const mainAppEl = document.getElementById('main-page');
    mainAppEl.innerHTML = `<section id="main" class="game__container"></section>`;
    const appEl = document.querySelector('.game__container');
    appEl.innerHTML = '';
    appEl.innerHTML = `
 <div class='start__main'>
    <h2 class="start__main_text">Выбери сложность</h2>
        <div class ='start__main_level'>
            <label>
                <input class = 'start__main_level-button' type="radio" name="level" value="1">
                <span class='start__main_level_item'>1</span>
            </label>
            <label>
                <input class = 'start__main_level-button' type="radio" name="level" value="2">
                <span class='start__main_level_item'>2</span>
            </label>
            <label>
                <input class = 'start__main_level-button' type="radio" name="level" value="3">
                <span class='start__main_level_item'>3</span>
            </label>
        </div>
    <button class="start__main_button">Старт</button>
 </div>
  `;
    const chooseDifficultButtons = document.querySelectorAll('.start__main_level-button');
    const buttonStart = document.querySelector('.start__main_button');
    console.log(chooseDifficultButtons);
    chooseDifficultButtons.forEach((chooseDifficultButton) => {
        chooseDifficultButton.addEventListener('click', () => {
            const gameLevel = Number(chooseDifficultButton.value);
            buttonStart.addEventListener('click', () => (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.startGame)(gameLevel));
        });
    });
};


/***/ }),

/***/ "./js/renderHtml.ts":
/*!**************************!*\
  !*** ./js/renderHtml.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardItemRender: () => (/* binding */ cardItemRender),
/* harmony export */   gameResultLose: () => (/* binding */ gameResultLose),
/* harmony export */   gameResultWin: () => (/* binding */ gameResultWin)
/* harmony export */ });
//рендер карты при нажатии
const cardItemRender = ({ cardValue, suitsBackground, cardSuit, }) => {
    return `            
            <div class="main__game_cards_item_left">
                <div class="card__value">${cardValue}</div>
                <img class="card__suit" src="img/${suitsBackground[cardSuit]}" alt="suit">
            </div>
            <div class="main__game_cards_item_center">
                <img class="card__suit_center" src="img/${suitsBackground[cardSuit]}" alt="suit">          
            </div>
            <div class="main__game_cards_item_right">
                <div class="card__value">${cardValue}</div>
                <img class="card__suit" src="img/${suitsBackground[cardSuit]}" alt="suit">
            </div>
                `;
};
//рендер результата игры при выигрыше
const gameResultWin = ({ timeForGame, cardsHtml, }) => {
    return `<div class="main__game_result">
      <img class = 'main__game_result_img'src="./img/win.svg" alt="dead">
      <h2 class="main__game_result_text">Вы выиграли</h2>
      <p class="main__game_result_text_time">Затраченное время</p>
      <p class='main__game_result_text_timer'>${timeForGame}</p>
      <button class="main__game_result_button">Играть снова</button>
    </div>
    <section id="main" class="game__container">
      <div class='main__game'>
         
         <div class="main__game_content">
               <div id="timer">
                  <div class="timer__text">
                     <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>
                  </div>
                  <p class='timer'>${timeForGame}</p>
               </div>
               <button class="main__game_content_button">Начать заново</button>
         </div>
               <div class="main__game_cards">
             ${cardsHtml}
               </div>
      </div>
    </section>  
    `;
};
//рендер результата игры при проигрыше
const gameResultLose = ({ timeForGame, cardsHtml, }) => {
    return `
    <div class="main__game_result">
      <img class = 'main__game_result_img'src="./img/dead.svg" alt="dead">
      <h2 class="main__game_result_text">Вы проиграли</h2>
      <p class="main__game_result_text_time">Затраченное время</p>
      <p class='main__game_result_text_timer'>${timeForGame}</p>
      <button class="main__game_result_button">Играть снова</button>
    </div>
    <section id="main" class="game__container">
      <div class='main__game'>
         
         <div class="main__game_content">
               <div id="timer">
                  <div class="timer__text">
                     <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>
                  </div>
                  <p class='timer'>${timeForGame}</p>
               </div>
               <button class="main__game_content_button">Начать заново</button>
         </div>
               <div class="main__game_cards">
                  ${cardsHtml}
               </div>
      </div>
    </section>                      
`;
};


/***/ }),

/***/ "./js/startGame.ts":
/*!*************************!*\
  !*** ./js/startGame.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/utils.ts");
/* harmony import */ var _gameMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameMenu */ "./js/gameMenu.ts");
/* harmony import */ var _startGameClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGameClosed */ "./js/startGameClosed.ts");



const startGame = (gameLevel) => {
    const mainAppEl = document.getElementById('main-page');
    mainAppEl.innerHTML = `<section id="main" class="game__container"></section>`;
    const suitsBackground = {
        '♠': 'spades.svg',
        '♣': 'clubs.svg',
        '♥': 'hearts.svg',
        '♦': 'diamonds.svg',
    };
    console.log(gameLevel);
    console.log(suitsBackground);
    const appEl = document.querySelector('.game__container');
    const cardsIcons = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createIconsArray)(gameLevel);
    console.log(cardsIcons);
    const cardsHtml = cardsIcons
        .map((card) => {
        console.log(card);
        return `
    <div data-value=${card.value} data-suit=${card.suit} class="main__game_cards_item" >
        <div class="main__game_cards_item_left">
            <div class="card__value">${card.value}</div>
            <img class="card__suit" src="img/${suitsBackground[card.suit]}" alt="suit">
        </div>
        <div class="main__game_cards_item_center">
        <img class="card__suit_center" src="img/${suitsBackground[card.suit]}" alt="suit">          
        </div>
        <div class="main__game_cards_item_right">
            <div class="card__value">${card.value}</div>
            <img class="card__suit" src="img/${suitsBackground[card.suit]}" alt="suit">
        </div>
    </div>
    `;
    })
        .join('');
    appEl.innerHTML = `
    <div class='main__game'>
        <div class="main__game_content">
            <div id="timer">
                <div class="timer__text">
                    <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>
                </div>
                <p class='timer'>00.00</p>
            </div>
            <button class="main__game_content_button">Начать заново</button>
        </div>
            <div class="main__game_cards">
                ${cardsHtml}
            </div>
    </div>`;
    const buttonStartGame = document.querySelector('.main__game_content_button');
    buttonStartGame.addEventListener('click', () => {
        (0,_gameMenu__WEBPACK_IMPORTED_MODULE_1__.createGameMenu)();
    });
    setTimeout(() => (0,_startGameClosed__WEBPACK_IMPORTED_MODULE_2__.startGameClosedCards)({ appEl, cardsIcons }), 5000);
};


/***/ }),

/***/ "./js/startGameClosed.ts":
/*!*******************************!*\
  !*** ./js/startGameClosed.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGameClosedCards: () => (/* binding */ startGameClosedCards)
/* harmony export */ });
/* harmony import */ var _gameMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameMenu */ "./js/gameMenu.ts");
/* harmony import */ var _renderHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderHtml */ "./js/renderHtml.ts");


let clickable = true;
let firstCard = null;
let secondCard = null;
const startGameClosedCards = ({ appEl, cardsIcons, }) => {
    const suitsBackground = {
        '♠': 'spades.svg',
        '♣': 'clubs.svg',
        '♥': 'hearts.svg',
        '♦': 'diamonds.svg',
    };
    const cardsHtml = cardsIcons &&
        cardsIcons
            .map((card) => {
            return `
    <div data-value=${card.value} data-suit=${card.suit} class='main__game_cards_item flip' >
        
    </div>
    `;
        })
            .join('');
    appEl.innerHTML = `
    <div class='main__game'>
        <div class="main__game_content">
            <div id="timer">
                <div class="timer__text">
                    <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>
                </div>
                <p class='timer'>00.00</p>
            </div>
            <button class="main__game_content_button">Начать заново</button>
        </div>
            <div class="main__game_cards">
                ${cardsHtml}
            </div>
    </div>`;
    //Таймер
    const countEl = document.querySelector('.timer');
    function timeGame() {
        let timer = 0;
        countEl.textContent = '00.00';
        function setTime() {
            timer++;
            const minutes = ('00' + Math.floor(timer / 60)).slice(-2);
            const seconds = ('00' + (timer % 60)).slice(-2);
            countEl.textContent = `${minutes}.${seconds}`;
        }
        window.timeGame = setInterval(setTime, 1000);
        console.log(window.timeGame);
        setTimeout(clearInterval, 600000, window.timeGame);
    }
    timeGame();
    // Начало игры
    const buttonStartGame = document.querySelector('.main__game_content_button');
    buttonStartGame.addEventListener('click', () => {
        clickable = true;
        firstCard = null;
        secondCard = null;
        (0,_gameMenu__WEBPACK_IMPORTED_MODULE_0__.createGameMenu)();
    });
    const flipCard = () => {
        const cardItems = document.querySelectorAll('.main__game_cards_item');
        cardItems.forEach((cardItem) => {
            cardItem.addEventListener('click', () => {
                if (clickable) {
                    const cardSuit = cardItem.dataset.suit;
                    const cardValue = cardItem.dataset.value;
                    cardItem.classList.remove('flip');
                    cardItem.innerHTML = (0,_renderHtml__WEBPACK_IMPORTED_MODULE_1__.cardItemRender)({
                        cardValue,
                        suitsBackground,
                        cardSuit,
                    });
                    if (firstCard === null) {
                        firstCard = cardItem;
                    }
                    else {
                        if (cardItem !== firstCard) {
                            secondCard = cardItem;
                            clickable = false;
                        }
                    }
                    if (firstCard !== null && secondCard !== null) {
                        if (firstCard.dataset.value === secondCard.dataset.value &&
                            firstCard.dataset.suit === secondCard.dataset.suit) {
                            setTimeout(() => {
                                firstCard = null;
                                secondCard = null;
                                clickable = true;
                            }, 500);
                        }
                        else {
                            setTimeout(() => {
                                console.log(cardItems);
                                cardItems.forEach((cardItem) => cardItem.classList.remove('flip'));
                                const timeForGame = countEl.innerHTML;
                                console.log(timeForGame);
                                const mainAppEl = document.getElementById('main-page');
                                const cardsHtml = cardsIcons
                                    .map((card) => {
                                    return `
                     <div data-value=${card.value} data-suit=${card.suit} class="main__game_cards_item" >
                         <div class="main__game_cards_item_left">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${suitsBackground[card.suit]}" alt="suit">
                        </div>
                        <div class="main__game_cards_item_center">
                        <img class="card__suit_center" src="img/${suitsBackground[card.suit]}" alt="suit">          
                        </div>
                        <div class="main__game_cards_item_right">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${suitsBackground[card.suit]}" alt="suit">
                        </div>
                     </div>
                     `;
                                })
                                    .join('');
                                mainAppEl.innerHTML = (0,_renderHtml__WEBPACK_IMPORTED_MODULE_1__.gameResultLose)({
                                    timeForGame,
                                    cardsHtml,
                                });
                                const appEl = document.querySelector('.game__container');
                                appEl.classList.add('end_game_background');
                                const buttonStartResult = document.querySelector('.main__game_result_button');
                                buttonStartResult.addEventListener('click', () => {
                                    const appEl = document.querySelector('.game__container');
                                    clickable = true;
                                    firstCard = null;
                                    secondCard = null;
                                    appEl.classList.remove('end_game_background');
                                    (0,_gameMenu__WEBPACK_IMPORTED_MODULE_0__.createGameMenu)();
                                });
                                clickable = true;
                            }, 500);
                        }
                    }
                    if (Array.from(cardItems).every((cardItem) => cardItem.className === 'main__game_cards_item')) {
                        const timeForGame = countEl.innerHTML;
                        const mainAppEl = document.getElementById('main-page');
                        const cardsHtml = cardsIcons
                            .map((card) => {
                            return `
                     <div data-value=${card.value} data-suit=${card.suit} class="main__game_cards_item" >
                         <div class="main__game_cards_item_left">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${suitsBackground[card.suit]}" alt="suit">
                        </div>
                        <div class="main__game_cards_item_center">
                        <img class="card__suit_center" src="img/${suitsBackground[card.suit]}" alt="suit">          
                        </div>
                        <div class="main__game_cards_item_right">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${suitsBackground[card.suit]}" alt="suit">
                        </div>
                     </div>
                     `;
                        })
                            .join('');
                        mainAppEl.innerHTML = (0,_renderHtml__WEBPACK_IMPORTED_MODULE_1__.gameResultWin)({
                            timeForGame,
                            cardsHtml,
                        });
                        const appEl = document.querySelector('.game__container');
                        appEl.classList.add('end_game_background');
                        const buttonStartResult = document.querySelector('.main__game_result_button');
                        buttonStartResult.addEventListener('click', () => {
                            clickable = true;
                            firstCard = null;
                            secondCard = null;
                            appEl.classList.remove('end_game_background');
                            (0,_gameMenu__WEBPACK_IMPORTED_MODULE_0__.createGameMenu)();
                        });
                    }
                }
            });
        });
    };
    flipCard();
};


/***/ }),

/***/ "./js/utils.ts":
/*!*********************!*\
  !*** ./js/utils.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIconsArray: () => (/* binding */ createIconsArray),
/* harmony export */   duplicateArrayAndMix: () => (/* binding */ duplicateArrayAndMix)
/* harmony export */ });
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ "./js/deck.ts");

const duplicateArrayAndMix = (array) => {
    const duplicateCards = array.flatMap((i) => [i, i]);
    for (let i = 0; i < duplicateCards.length - 1; i++) {
        const j = i + Math.floor(Math.random() * (duplicateCards.length - i));
        const temp = duplicateCards[j];
        duplicateCards[j] = duplicateCards[i];
        duplicateCards[i] = temp;
    }
    return duplicateCards;
};
const createIconsArray = (gameLevel) => {
    const deck = new _deck__WEBPACK_IMPORTED_MODULE_0__.Deck();
    deck.shuffle();
    switch (gameLevel) {
        case 1:
            return duplicateArrayAndMix(deck.cards.slice(0, 3));
        case 2:
            return duplicateArrayAndMix(deck.cards.slice(0, 6));
        case 3:
            return duplicateArrayAndMix(deck.cards.slice(0, 9));
        default:
            break;
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameMenu */ "./js/gameMenu.ts");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");


const cardsApp = () => {
    (0,_gameMenu__WEBPACK_IMPORTED_MODULE_0__.createGameMenu)();
};
cardsApp();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map