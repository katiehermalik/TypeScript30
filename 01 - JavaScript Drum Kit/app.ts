export {};

function playSound(e: KeyboardEvent) {
  const audio: HTMLMediaElement = document.querySelector(`audio[data-key="${e.code}"]`);
  const key: HTMLElement = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing')
}

// Using Event Delegation
const keys = document.querySelector('.keys');
keys.addEventListener('transitionend', removeTransition);

document.addEventListener('keypress', playSound)
