import { startGame } from './startGame.js';
export const createGameMenu = () => {
   const mainAppEl = document.getElementById('main-page') as HTMLElement;
   mainAppEl.innerHTML = `<section id="main" class="game__container"></section>`;
   const appEl = document.querySelector('.game__container') as HTMLElement;

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

   const chooseDifficultButtons = document.querySelectorAll('.start__main_level-button')
   const buttonStart = document.querySelector('.start__main_button') as HTMLElement;
   console.log(chooseDifficultButtons);

   chooseDifficultButtons.forEach(chooseDifficultButton => {
    chooseDifficultButton.addEventListener('click', () => {
        const gameLevel = Number((chooseDifficultButton as HTMLButtonElement).value);
        buttonStart.addEventListener('click', () => startGame(gameLevel));
     }); 
    });
   /* for (let chooseDifficultButton of chooseDifficultButtons) {
      chooseDifficultButton.addEventListener('click', () => {
         const gameLevel = Number(chooseDifficultButton.value);
         buttonStart.addEventListener('click', () => startGame(gameLevel));
      });
   } */
};
