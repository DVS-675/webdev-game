const SUITS = ['♠', '♣', '♥', '♦'];
const VALUES = ['A', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Deck {
   cards: any
   suitsBackground: { '♠': any; '♣': any; '♥': any; '♦': any };
   constructor(cards:any = freshDeck()) {
      this.suitsBackground = {
         '♠': 'spades.svg',
         '♣': 'clubs.svg',
         '♥': 'hearts.svg',
         '♦': 'diamonds.svg',
      };
      this.cards = cards;
   }

   get numberOfCards() {
      return this.cards.length;
   }

   shuffle() {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
         const newIndex = Math.floor(Math.random() * (i + 1));
         const oldValue = this.cards[newIndex];
         this.cards[newIndex] = this.cards[i];
         this.cards[i] = oldValue;
      }
   }
}

class Card {
   suit: string
   value: string
   constructor(suit:string, value:string) {
      this.suit = suit;
      this.value = value;
   }   
}

function freshDeck() {
   return SUITS.flatMap((suit) => {
      return VALUES.map((value) => {
         return new Card(suit, value);
      });
   });
}
