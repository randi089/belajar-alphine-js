const delay = (milliseconds = 500) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
const benar = document.querySelector(".benar");
const salah = document.querySelector(".salah");
const done = document.querySelector(".done");
const game = () => {
  return {
    cards: [
      { color: "red", flipped: false, cleared: false, animate: "" },
      { color: "green", flipped: false, cleared: false, animate: "" },
      { color: "blue", flipped: false, cleared: false, animate: "" },
      { color: "yellow", flipped: false, cleared: false, animate: "" },
      { color: "red", flipped: false, cleared: false, animate: "" },
      { color: "green", flipped: false, cleared: false, animate: "" },
      { color: "blue", flipped: false, cleared: false, animate: "" },
      { color: "yellow", flipped: false, cleared: false, animate: "" },
    ].sort(() => Math.random() - 0.5),
    get flippedCards() {
      return this.cards.filter((card) => card.flipped);
    },
    get remainingCards() {
      return this.cards.filter((card) => !card.cleared);
    },
    async flipCard(card) {
      // hanya bisa buka 2 kartu
      if (this.flippedCards.length === 2) return;

      // buka tutup kartu
      card.flipped = !card.flipped;

      //   cek ketika sudah ada 2 kartu yang terbuka, lalu cek warnanya sama atau tidak
      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0].color === this.flippedCards[1].color) {
          // beri animasi sebelum hilang
          this.flippedCards.forEach(
            (card) => (card.animate = "animate__animated animate__flash")
          );
          benar.play();
          await delay();
          benar.pause();
          benar.currentTime = 0;
          this.flippedCards.forEach((card) => (card.cleared = true));

          // cek apakah kartu sudah hilang semua
          if (this.remainingCards.length === 0) {
            done.play();
            await delay();
            alert("You WON!!!");
          }
        }

        // tutup lagi semua kartu, setelah pemeriksaan
        this.flippedCards.forEach(
          (card) => (card.animate = "animate__animated animate__tada")
        );
        salah.play();
        await delay();
        salah.pause();
        salah.currentTime = 0;
        this.flippedCards.forEach((card) => (card.flipped = false));

        // hilangkan class animasinya
        this.remainingCards.forEach((card) => (card.animate = ""));
      }
    },
  };
};
