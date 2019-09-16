import FlipClock from "flipclock";

const el = document.querySelector('.js-clock');

const clock = new FlipClock(el, new Date('2019-11-15'), {
    clockFace: 'DayCounter',
    countdown: true
});

clock.face = 'DayCounter'

console.log(clock)