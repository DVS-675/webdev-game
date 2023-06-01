import { Deck } from '../js/deck.ts';
import { duplicateArrayAndMix } from '../js/utils.ts';
import { createIconsArray } from '../js/utils.ts';
const { it, expect } = require('@jest/globals');

describe('How many cards in deck', () => {
   it('should be 36 cards', () => {
      // Prepare
      const expected = 36;
      // Action
      const deck = new Deck();
      const result = deck.cards.length;
      // Compare
      expect(result).toBe(expected);
   });
});

describe('Duplicate cards array', () => {
   it('should duplicate cards in array', () => {
      // Prepare
      const expected = 16;
      // Action
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const doubleArray = duplicateArrayAndMix(array);
      const result = doubleArray.length;
      // Compare
      expect(result).toBe(expected);
   });
});

describe('Array of cards depending on game level', () => {
   it('should be a double array of cards depending on game level', () => {
      // Prepare: 1st level = 6 cards, 2nd level = 12 cards, 3d level = 18 cards
      const expected = 6;
      const level = Number(1);
      // Action
      const createArrayOfCards = createIconsArray(level);
      const result = createArrayOfCards.length;
      // Compare
      expect(result).toBe(expected);
   });
});
