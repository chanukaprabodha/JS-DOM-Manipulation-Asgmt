function rotateLetters() {
    var cards = document.getElementsByClassName("card");
    var letters = [];

    for (var i = 0; i < cards.length; i++) {
      letters.push(cards[i].getElementsByTagName("span")[0].textContent);
    }

    setInterval(function () {
      var lastLetter = letters[letters.length - 1];

      for (var i = letters.length - 1; i > 0; i--) {
        letters[i] = letters[i - 1];
      }
      letters[0] = lastLetter;

      for (var i = 0; i < cards.length; i++) {
        cards[i].getElementsByTagName("span")[0].textContent = letters[i];
      }
    }, 1000);
  }

  rotateLetters();