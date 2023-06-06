type suitsBackgroundType = {
   [word: string]: string;
};

//рендер карты при нажатии

export const cardItemRender = ({
   cardValue,
   suitsBackground,
   cardSuit,
}: {
   cardValue: string | undefined;
   suitsBackground: suitsBackgroundType;
   cardSuit: string | undefined;
}) => {
   return `            
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
};

//рендер результата игры при выигрыше

export const gameResultWin = ({
   timeForGame,
   cardsHtml,
}: {
   timeForGame: string;
   cardsHtml: string;
}) => {
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

export const gameResultLose = ({
   timeForGame,
   cardsHtml,
}: {
   timeForGame: string;
   cardsHtml: string;
}) => {
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
