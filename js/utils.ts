import Deck from './deck'

export const duplicateArrayAndMix = (array: string[]) => {
   const duplicateCards = array.flatMap((i:string) => [i, i])
   for (let i = 0; i < duplicateCards.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (duplicateCards.length - i))
      let temp = duplicateCards[j]
      duplicateCards[j] = duplicateCards[i]
      duplicateCards[i] = temp
   }
   return duplicateCards
}

export const createIconsArray = (gameLevel: number) => {
   let deck = new Deck()
   deck.shuffle()

   switch (gameLevel) {
      case 1:
         return duplicateArrayAndMix(deck.cards.slice(0, 3))
      case 2:
         return duplicateArrayAndMix(deck.cards.slice(0, 6))
      case 3:
         return duplicateArrayAndMix(deck.cards.slice(0, 9))
      default:
         break
   }
}
