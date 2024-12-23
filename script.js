let clickCount = 0;

document.getElementById('cookie').addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-count').innerText = clickCount;
});
