const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
} // fisher Yates shuffle

class Card {
  constructor(suit, value, score) {
    this.suit = suit
    this.value = value
    this.score = score
  }
}

class Deck {
  constructor() {
    this.deck1 = []
    this.deckMaker()
  }
  suit = ["club", "heart", "spade", "diamond"]
  value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
  score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    
  deckMaker() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        this.deck1.push(new Card(this.suit[i], this.value[j], this.score[j]))
      }
    }
  }
}

let maindeck = new Deck
shuffleArray(maindeck.deck1)
let deck1 = maindeck.deck1.splice(0, 26)
let deck2 = maindeck.deck1.slice(0, 26)
storage = []
console.log(deck1, deck2)
// spilts the deck into two

while(deck1.length > 0 && deck2.length > 0) { //while loop that tells the game when to end
  if (deck1[0].score === deck2[0].score) {
    console.log("This Means War!")
    if (deck1.length < 5) { //edge case where their is a war and one player has less than 5 cards
    deck2.push(...deck1)
    deck1.length = 0
    } else if (deck2.length < 5) { //edge case where their is a war and one player has less than 5 cards
      deck1.push(...deck2)
      deck2.length = 0
    } else { //code for wars
      storage.push(deck1[0], deck1[1], deck1[2], deck1[3])
      storage.push(deck2[0], deck2[1], deck2[2], deck2[3])
      deck1.splice(0, 4)
      deck2.splice(0, 4)
    }
    console.log(storage)
  } else if (deck1[0].score > deck2[0].score) { 
    console.log(deck1[0], deck2[0])
    deck1.push(...storage)
    deck1.push(deck1[0], deck2[0])
    deck1.shift()
    deck2.shift()
    storage.length = 0
    console.log("Deck1 wins this round")
  } else if (deck1[0].score < deck2[0].score) {
    console.log(deck1[0], deck2[0])
    deck2.push(...storage)
    deck2.push(deck2[0], deck1[0])
    deck1.shift()
    deck2.shift()
    storage.length = 0
    console.log("Deck2 wins this round")
  } // ^^ code for normal play ^^
}

console.log(deck1, deck2)
if (deck1.length > deck2.length) {
  console.log("deck1 wins")
} else if (deck1.length < deck2.length) {
  console.log("deck2 wins")
}
//logs who won