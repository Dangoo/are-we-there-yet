import FlipClock from "flipclock";

const el = document.querySelector('.js-clock');
const DATE = new Date('2019-11-15T12:00:00+01:00');

const clock = new FlipClock(el, DATE, {
    clockFace: 'DayCounter',
    countdown: true
});

clock.face = 'DayCounter'
clock.timer.on('interval', () => { 
    const stringTimer = clock.face.value.digits.map(digits => digits.join('')).join(':');

    window.document.title = stringTimer;
})