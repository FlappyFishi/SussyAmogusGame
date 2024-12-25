let clickCount = 0;

document.getElementById('cookie').addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-count').innerText = clickCount;
  playClickSound();
});

function playClickSound() {
  const clickSound = new Audio('assets/sounds/shortened monkey.mp3');
  clickSound.play();
}
