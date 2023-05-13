import { startGame } from "./startGame.js";

export const createGameMenu = () => {
  const title = document.createElement("h2");
  title.textContent = "Выбери сложность";
  title.classList.add("start__main_text");

  const buttonStart = document.createElement("button");
  buttonStart.textContent = "Старт";
  buttonStart.classList.add("start__main_button");

  const gameSectionStart = document.querySelector(".game__container");
  gameSectionStart.innerHTML = "";

  const buttonLevelBox = document.createElement("div");
  buttonLevelBox.classList.add("start__main_level");

  const createDifficultButton = (difficult) => {
    const buttonLevel = document.createElement("button");
    buttonLevel.classList.add("start__main_level-button");
    buttonLevel.textContent = `${difficult}`;

    buttonLevel.addEventListener("click", () => {
      if (buttonLevel.classList.contains("clicked")) {
        buttonLevel.classList.remove("clicked");
      } else {
        buttonLevel.classList.add("clicked");
      }
    });

    return buttonLevel;
  };

  gameSectionStart.append(
    title,
    createDifficultButton(1),
    createDifficultButton(2),
    createDifficultButton(3),
    buttonStart
  );

  const chooseDifficultButtons = document.querySelectorAll(
    ".start__main_level-button"
  );
  for (let chooseDifficultButton of chooseDifficultButtons) {
    chooseDifficultButton.addEventListener("click", () => {
      const gameLevel = Number(chooseDifficultButton.textContent);
      buttonStart.addEventListener("click", () => startGame(gameLevel));
    });
  }
};
