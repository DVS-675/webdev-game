import { createGameMenu } from './gameMenu.js'
let clickable = true
let firstCard = null
let secondCard = null
export const startGameClosedCards = ({ appEl, cardsIcons }) => {
   const suitsBackground = {
      '♠': 'card_suit_spades.svg',
      '♣': 'card_suit_clubs.svg',
      '♥': 'card_suit_hearts.svg',
      '♦': 'card_suit_diamonds.svg',
   }
   const cardsHtml =
      cardsIcons &&
      cardsIcons
         .map((card) => {
            return `
    <div data-value=${card.value} data-suit=${card.suit} class="main__game_cards_item flip" >
        
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
      clickable = true
      firstCard = null
      secondCard = null
      createGameMenu()
   })

   const flipCard = () => {
      const cardItems = document.querySelectorAll('.main__game_cards_item')

      for (const cardItem of cardItems) {
         cardItem.addEventListener('click', () => {
            if (clickable == true) {
               const cardSuit = cardItem.dataset.suit
               const cardValue = cardItem.dataset.value
               cardItem.classList.remove('flip')
               cardItem.innerHTML = `            
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
                `

               if (firstCard == null) {
                  firstCard = cardItem
               } else {
                  if (cardItem != firstCard) {
                     secondCard = cardItem
                     clickable = false
                  }
               }

               if (firstCard != null && secondCard != null) {
                  if (
                     firstCard.dataset.value == secondCard.dataset.value &&
                     firstCard.dataset.suit == secondCard.dataset.suit
                  ) {
                     setTimeout(() => {
                        firstCard = null
                        secondCard = null
                        clickable = true
                        console.log('Выиграл')
                     }, 500)
                  } else {
                     setTimeout(() => {
                        alert('Вы проиграли!')
                        createGameMenu()
                        firstCard.classList.add('flip')
                        secondCard.classList.add('flip')
                        firstCard.innerHTML = ''
                        secondCard.innerHTML = ''
                        firstCard = null
                        secondCard = null
                        clickable = true
                     }, 500)
                  }
               }
               if (
                  Array.from(cardItems).every(
                     (cardItem) =>
                        cardItem.className === 'main__game_cards_item'
                  )
               ) {
                  alert('Вы угадали все карты!')
               }
            }
         })
      }
   }
   flipCard()
}
