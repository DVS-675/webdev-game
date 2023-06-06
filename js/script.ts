import { createGameMenu } from './gameMenu';
import '../css/style.scss';
declare global {
   interface Window {
      timeGame: ReturnType<typeof setInterval>;
      timeForGame: unknown;
   }
}
const cardsApp = () => {
   createGameMenu();
};

cardsApp();
