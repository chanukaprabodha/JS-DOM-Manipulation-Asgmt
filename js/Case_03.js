const mp3 = document.querySelector("audio");
let isRunning = false;
let intervalId;
let currentIndex = 0;
let direction = 1;

startBtn.onclick = function () {
  mp3.play();

  if (!isRunning) {
    intervalId = setInterval(function () {
      let cards = document.getElementsByClassName("card");
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "white";
      }

      cards[currentIndex].style.backgroundColor = "#ff4d4d";
      if (currentIndex > 0) {
        cards[currentIndex - 1].style.backgroundColor = "#ff9f9e";
      }
      if (currentIndex < cards.length - 1) {
        cards[currentIndex + 1].style.backgroundColor = "#ff9f9e";
      }

      currentIndex = currentIndex + direction;
      if (currentIndex >= cards.length - 1) {
        direction = -1;
      } else if (currentIndex <= 0) {
        direction = 1;
      }
    }, 150);

    isRunning = true;
  }
};

stopBtn.onclick = function () {
  mp3.pause();
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
};
