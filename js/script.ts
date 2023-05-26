import { createGameMenu } from './gameMenu'
import '../css/style.scss'
declare global {
   interface Window {      
       timeGame: any
   }
}
const cardsApp = () => {
   createGameMenu()
}

cardsApp()
