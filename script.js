let clickCount = 0;

const watermelon = document.getElementById('watermelon');

document.getElementById('cookie').addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-count').innerText = clickCount;
  playClickSound();
});

function playClickSound() {
  const clickSound = new Audio('assets/sounds/shortened monkey.mp3');
  clickSound.play();
}

function playWatermelonClickSound() {
  const watermelonClickSound = new Audio('assets/sounds/jonkler_rave.mp3');
  watermelonClickSound.play();
}

function spawnWatermelon() {
  const screenWidth = window.innerWidth;
  const randomLeft = Math.random() * (screenWidth - 60);

  watermelon.style.top = '-100px';
  watermelon.style.left = `${randomLeft}px`;
  watermelon.style.display = block;

  setTimeout(() => {
    watermelon.style.top = '100vh'; // Move to the bottom of the screen
  }, 50);

  // Hide the golden cookie if it reaches the bottom
  setTimeout(() => {
    watermelon.style.display = 'none';
  }, 5000); // Match the transition duration
}

watermelon.addEventListener('click', () => {
  clickCount += 69;
  document.getElementById('click-count').innerText = clickCount;
  watermelon.style.display = 'none';
  playWatermelonClickSound();
});

setInterval(() => {
  if (Math.random() < 0.9) {
    spawnWatermelon();
  }
}, 5000);
