function rotateColors() {
    const cards = document.getElementsByClassName("card");
    let colors = [];

    for (var i = 0; i < cards.length; i++) {
      colors.push(window.getComputedStyle(cards[i]).backgroundColor);
    }

    setInterval(function () {
      const lastColor = colors[colors.length - 1];

      for (var i = colors.length - 1; i > 0; i--) {
        colors[i] = colors[i - 1];
      }
      colors[0] = lastColor;

      for (var i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = colors[i];
      }
    }, 1000);
  }

  rotateColors();