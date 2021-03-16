"use strict";

var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = "rotate(" + minutesDegrees + "deg)";
    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = "rotate(" + hoursDegrees + "deg)";
}
setInterval(setDate, 1000);
