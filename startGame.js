import { createIconsArray } from "./utils.js";
import { createGameMenu } from "./gameMenu.js";
export const startGame = (gameLevel) => {
  console.log(gameLevel);

  const appEl = document.querySelector(".game__container");
  const cardsIcons = createIconsArray(gameLevel);
  console.log(cardsIcons);

  const cardsHtml = cardsIcons
    .map((card) => {
      return `
    <div class="main__game_cards_item">
        <div class="main__game_cards_item_left">
            <div>${card.value}</div>
            <div>${card.suit}</div>
        </div>
        <div class="main__game_cards_item_center">
            <div>${card.suit}</div>            
        </div>
        <div class="main__game_cards_item_right">
            <div>${card.value}</div>
            <div>${card.suit}</div>
        </div>
    </div>
    `;
    })
    .join("");

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

  const buttonStartGame = document.querySelector(".main__game_content_button");
  buttonStartGame.addEventListener("click", () => {
    createGameMenu();
  });
};
