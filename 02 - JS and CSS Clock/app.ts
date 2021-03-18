export {};

const secondHand: HTMLElement = document.querySelector('.second-hand');
const minuteHand: HTMLElement = document.querySelector('.min-hand');
const hourHand: HTMLElement = document.querySelector('.hour-hand');

function setDate(): void {
  const now: Date = new Date();
  const seconds: number = now.getSeconds();
  const secondsDegrees: number = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes: number = now.getMinutes();
  const minutesDegrees: number = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours: number = now.getHours();
  const hoursDegrees: number = ((hours / 12) * 360) + 90 + ((minutes / 60) * 30);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

