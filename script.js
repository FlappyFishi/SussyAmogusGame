let clickCount = 0;

const watermelon = document.getElementById('watermelon');

function playClickSound() {
  const clickSound = new Audio('assets/sounds/shortened monkey.mp3');
  clickSound.play();
  cookie.classList.add('enlarge');
  setTimeout(() => {
    cookie.classList.remove('enlarge');
  }, 100);
}

function playWatermelonClickSound() {
  const watermelonClickSound = new Audio('assets/sounds/jonkler_rave.mp3');
  watermelonClickSound.play();
}

function spawnWatermelon() {
  const screenWidth = window.innerWidth;
  const randomLeft = Math.max(10, Math.random() * (screenWidth - 70));

  watermelon.style.top = '-100px';
  watermelon.style.left = `${randomLeft}px`;
  watermelon.style.display = 'block';

  setTimeout(() => {
    watermelon.style.top = `${window.innerHeight}px`; // Move to the bottom of the screen
  }, 50);

  // Hide the golden cookie if it reaches the bottom
  setTimeout(() => {
    if (parseInt(watermelon.style.top) >= window.innerHeight) {
      console.log('Watermelon went off-screen, hiding...');
      watermelon.style.display = 'none';
    }
  }, 5000); // Match the transition duration
}

watermelon.addEventListener('click', () => {
  clickCount += 69;
  document.getElementById('click-count').innerText = clickCount;
  watermelon.style.display = 'none';
  playWatermelonClickSound();
});

setInterval(() => {
  if (Math.random() < 0.5) {
    console.log('Spawning watermelon!');
    spawnWatermelon();
  }
}, 10000);

document.getElementById('cookie').addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-count').innerText = clickCount;
  playClickSound();
});
