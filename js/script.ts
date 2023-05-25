import { createGameMenu } from './gameMenu.js'
import '../css/style.scss'
declare global {
   interface Window {
       cardGame: any;
   }
}
const cardsApp = () => {
   createGameMenu()
}

cardsApp()
