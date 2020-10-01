$(document).ready(function () {
  const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
  const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      $("#52").append(`<li>${rank} of ${suit}</li>`)      
    })
  })
})