import { createGameMenu } from './gameMenu.js'

export const startGameClosedCards = ({ appEl, cardsIcons }) => {
   const cardsHtml =
      cardsIcons &&
      cardsIcons
         .map((card) => {
            return `
    <div data-value=${card.value} data-suit=${card.suit} class="main__game_cards_item" style="background:center center no-repeat, url(../img/card_shirt.svg);">
        
    </div>
    `
         })
         .join('')

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
    </div>`

   const buttonStartGame = document.querySelector('.main__game_content_button')
   buttonStartGame.addEventListener('click', () => {
      createGameMenu()
   })
}
