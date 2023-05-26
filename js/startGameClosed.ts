import { createGameMenu } from './gameMenu';
import { ICardType } from './startGame';
let clickable = true;
let firstCard: HTMLElement | null = null;
let secondCard: HTMLElement | null = null;
export const startGameClosedCards = ({
   appEl,
   cardsIcons,
}: {
   appEl: HTMLElement;
   cardsIcons: ICardType[];
}) => {
   type suitsBackgroundType = {
      [word: string]: string;
   };
   const suitsBackground: suitsBackgroundType = {
      '♠': 'spades.svg',
      '♣': 'clubs.svg',
      '♥': 'hearts.svg',
      '♦': 'diamonds.svg',
   };
   let cardsHtml =
      cardsIcons &&
      cardsIcons
         .map((card: ICardType) => {
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
   const countEl = document.querySelector('.timer') as HTMLElement;
   /* countEl.innerHTML = `00.0${timer}`; */
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

   const buttonStartGame = document.querySelector(
      '.main__game_content_button'
   ) as HTMLElement;
   buttonStartGame.addEventListener('click', () => {
      clickable = true;
      firstCard = null;
      secondCard = null;
      createGameMenu();
   });

   const flipCard = () => {
      const cardItems = document.querySelectorAll('.main__game_cards_item');
      (cardItems as NodeListOf<HTMLElement>).forEach(
         (cardItem: HTMLElement) => {
            cardItem.addEventListener('click', () => {
               if (clickable) {
                  const cardSuit = cardItem.dataset.suit;
                  const cardValue = cardItem.dataset.value;
                  cardItem.classList.remove('flip');
                  cardItem.innerHTML = `            
            <div class="main__game_cards_item_left">
                <div class="card__value">${cardValue}</div>
                <img class="card__suit" src="img/${
                   suitsBackground[cardSuit as string]
                }" alt="suit">
            </div>
            <div class="main__game_cards_item_center">
                <img class="card__suit_center" src="img/${
                   suitsBackground[cardSuit as string]
                }" alt="suit">          
            </div>
            <div class="main__game_cards_item_right">
                <div class="card__value">${cardValue}</div>
                <img class="card__suit" src="img/${
                   suitsBackground[cardSuit as string]
                }" alt="suit">
            </div>
                `;

                  if (firstCard == null) {
                     firstCard = cardItem;
                  } else {
                     if (cardItem != firstCard) {
                        secondCard = cardItem;
                        clickable = false;
                     }
                  }

                  if (firstCard != null && secondCard != null) {
                     if (
                        firstCard.dataset.value == secondCard.dataset.value &&
                        firstCard.dataset.suit == secondCard.dataset.suit
                     ) {
                        setTimeout(() => {
                           firstCard = null;
                           secondCard = null;
                           clickable = true;
                        }, 500);
                     } else {
                        setTimeout(() => {
                           console.log(cardItems);
                           cardItems.forEach((cardItem) =>
                              cardItem.classList.remove('flip')
                           );

                           const timeForGame = countEl.innerHTML;
                           console.log(timeForGame);
                           const mainAppEl = document.getElementById(
                              'main-page'
                           ) as HTMLElement;
                           const cardsHtml = cardsIcons
                              .map((card: ICardType) => {
                                 return `
                     <div data-value=${card.value} data-suit=${
                                    card.suit
                                 } class="main__game_cards_item" >
                         <div class="main__game_cards_item_left">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${
                                 suitsBackground[card.suit]
                              }" alt="suit">
                        </div>
                        <div class="main__game_cards_item_center">
                        <img class="card__suit_center" src="img/${
                           suitsBackground[card.suit]
                        }" alt="suit">          
                        </div>
                        <div class="main__game_cards_item_right">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${
                                 suitsBackground[card.suit]
                              }" alt="suit">
                        </div>
                     </div>
                     `;
                              })
                              .join('');
                           mainAppEl.innerHTML = `
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

                           const appEl = document.querySelector(
                              '.game__container'
                           ) as HTMLElement;
                           appEl.classList.add('end_game_background');

                           const buttonStartResult = document.querySelector(
                              '.main__game_result_button'
                           ) as HTMLElement;

                           buttonStartResult.addEventListener('click', () => {
                              const appEl = document.querySelector(
                                 '.game__container'
                              ) as HTMLElement;
                              clickable = true;
                              firstCard = null;
                              secondCard = null;
                              appEl.classList.remove('end_game_background');
                              createGameMenu();
                           });
                           clickable = true;
                        }, 500);
                     }
                  }
                  if (
                     Array.from(cardItems).every(
                        (cardItem) =>
                           cardItem.className === 'main__game_cards_item'
                     )
                  ) {
                     const timeForGame = countEl.innerHTML;
                     const mainAppEl = document.getElementById(
                        'main-page'
                     ) as HTMLElement;
                     const cardsHtml = cardsIcons
                        .map((card: ICardType) => {
                           return `
                     <div data-value=${card.value} data-suit=${
                              card.suit
                           } class="main__game_cards_item" >
                         <div class="main__game_cards_item_left">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${
                                 suitsBackground[card.suit]
                              }" alt="suit">
                        </div>
                        <div class="main__game_cards_item_center">
                        <img class="card__suit_center" src="img/${
                           suitsBackground[card.suit]
                        }" alt="suit">          
                        </div>
                        <div class="main__game_cards_item_right">
                              <div class="card__value">${card.value}</div>
                              <img class="card__suit" src="img/${
                                 suitsBackground[card.suit]
                              }" alt="suit">
                        </div>
                     </div>
                     `;
                        })
                        .join('');
                     mainAppEl.innerHTML = `
                            <div class="main__game_result">
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

                     const appEl = document.querySelector(
                        '.game__container'
                     ) as HTMLElement;
                     appEl.classList.add('end_game_background');
                     const buttonStartResult = document.querySelector(
                        '.main__game_result_button'
                     ) as HTMLElement;
                     buttonStartResult.addEventListener('click', () => {
                        clickable = true;
                        firstCard = null;
                        secondCard = null;
                        appEl.classList.remove('end_game_background');
                        createGameMenu();
                     });
                  }
               }
            });
         }
      );
   };
   flipCard();
};
