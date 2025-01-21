const game = () => {
  return {
    cards: [
      { color: "red", flipped: false, cleared: false },
      { color: "green", flipped: false, cleared: false },
      { color: "blue", flipped: false, cleared: false },
      { color: "yellow", flipped: false, cleared: false },
      { color: "red", flipped: false, cleared: false },
      { color: "green", flipped: false, cleared: false },
      { color: "blue", flipped: false, cleared: false },
      { color: "yellow", flipped: false, cleared: false },
    ],
    get flippedCards() {
      return this.cards.filter((card) => card.flipped);
    },
    flipCard(card) {
      // buka tutup kartu
      card.flipped = !card.flipped;

      //   cek ketika sudah ada 2 kartu yang terbuka, lalu cek warnanya sama atau tidak
      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0].color === this.flippedCards[1].color) {
          alert("warnanya sama!");
        }
      }
    },
  };
};
