import { createIconsArray } from './utils';
import { createGameMenu } from './gameMenu';
import { startGameClosedCards } from './startGameClosed';

export interface ICardType {
   suit: string;
   value: string;
}
export const startGame = (gameLevel: number) => {
   const mainAppEl = document.getElementById('main-page') as HTMLElement;
   mainAppEl.innerHTML = `<section id="main" class="game__container"></section>`;
   type suitsBackgroundType = {
      [word: string]: string;
   };
   const suitsBackground: suitsBackgroundType = {
      '♠': 'spades.svg',
      '♣': 'clubs.svg',
      '♥': 'hearts.svg',
      '♦': 'diamonds.svg',
   };

   console.log(gameLevel);
   console.log(suitsBackground);
   const appEl = document.querySelector('.game__container') as HTMLElement;
   const cardsIcons = createIconsArray(gameLevel) as ICardType[];
   console.log(cardsIcons);

   const cardsHtml = cardsIcons
      .map((card: ICardType) => {
         console.log(card);
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

   const buttonStartGame = document.querySelector(
      '.main__game_content_button'
   ) as HTMLElement;
   buttonStartGame.addEventListener('click', () => {
      createGameMenu();
   });
   setTimeout(() => startGameClosedCards({ appEl, cardsIcons }), 5000);
};
