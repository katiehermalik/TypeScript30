"use strict";

var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsDegrees === 90
        ? secondHand.style.transition = 'none'
        : secondHand.style.transition = 'transform 0.05s cubic-bezier(0.24, 2.64, 0.51, 1)';
    secondHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesDegrees === 90
        ? minuteHand.style.transition = 'none'
        : minuteHand.style.transition = 'transform 0.05s cubic-bezier(0.24, 2.64, 0.51, 1)';
    minuteHand.style.transform = "rotate(" + minutesDegrees + "deg)";
    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90 + ((minutes / 60) * 30);
    hoursDegrees === 90
        ? hourHand.style.transition = 'none'
        : hourHand.style.transition = 'transform 0.05s cubic-bezier(0.24, 2.64, 0.51, 1)';
    hourHand.style.transform = "rotate(" + hoursDegrees + "deg)";
}
setInterval(setDate, 1000);
