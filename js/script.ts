import { createGameMenu } from './gameMenu'
import '../css/style.scss'
declare global {
   interface Window {
       cardGame: any;
       timeGame: any
   }
}
const cardsApp = () => {
   createGameMenu()
}

cardsApp()
