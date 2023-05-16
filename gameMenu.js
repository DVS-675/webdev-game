import { startGame } from "./startGame.js";

export const createGameMenu = () => {
  const title = document.querySelector(".start__main_text");
  const appEl = document.querySelector(".game__container");
  appEl.innerHTML = "";

  appEl.innerHTML = `
  <h2 class="start__main_text">Выбери сложность</h2>
    <div class ='start__main_level'>
        <label>
            <input class = 'start__main_level-button' type="radio" name="level" value="1">
            <span>1</span>
        </label>
        <label>
            <input class = 'start__main_level-button' type="radio" name="level" value="2">
            <span>2</span>
        </label>
        <label>
            <input class = 'start__main_level-button' type="radio" name="level" value="3">
            <span>3</span>
        </label>
    </div>
  <button class="start__main_button">Старт</button>
  `;
 
  const chooseDifficultButtons = document.querySelectorAll(
    ".start__main_level-button"
  );
  const buttonStart = document.querySelector(".start__main_button");
  console.log(chooseDifficultButtons);

  for (let chooseDifficultButton of chooseDifficultButtons) {
    chooseDifficultButton.addEventListener("click", () => {
      const gameLevel = Number(chooseDifficultButton.value);
      buttonStart.addEventListener("click", () => startGame(gameLevel));
    });
  }
};
