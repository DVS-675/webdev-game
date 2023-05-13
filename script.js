import { createGameMenu } from "./gameMenu.js";

const cardsApp = () => {
  createGameMenu();
};

cardsApp();

/* function chooseDifficult() {
  const difficultLevelButtons = document.querySelectorAll(
    ".start__main_level_button"
  );
  for (let difficultLevelButton of difficultLevelButtons) {
    difficultLevelButton.addEventListener("click", () => {
      window.rate = difficultLevelButton.value;

      alert("Выбран уровень сложности " + window.rate);
    });
  }
}
chooseDifficult(); */
