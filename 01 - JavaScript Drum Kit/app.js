"use strict";

function playSound(e) {
    var audio = document.querySelector("audio[data-key=\"" + e.code + "\"]");
    var key = document.querySelector(".key[data-key=\"" + e.code + "\"]");
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
}
// Using Event Delegation
var keys = document.querySelector('.keys');
keys.addEventListener('transitionend', removeTransition);
document.addEventListener('keypress', playSound);
