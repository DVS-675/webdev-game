import { createGameMenu } from './gameMenu';
import '../css/style.scss';
declare global {
   interface Window {
      timeGame: ReturnType<typeof setInterval>;
   }
}
const cardsApp = () => {
   createGameMenu();
};

cardsApp();
