
const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minutesRef = document.querySelector('[data-value="mins"]');
const secondsRef = document.querySelector('[data-value="secs"]');


// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate:new Date('Sep 01, 2021');


// });


const CountdownTimer = {

    start() {
        setInterval(() => {
            const currentTime = Date.now()
            const targetDate = new Date('Sep 01, 2021');
            const deltaTime = targetDate - currentTime;
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            updateClockSpan({ days, hours, mins, secs })
        }, 1000)
    },
}

CountdownTimer.start()


function pad(value) {
    return String(value).padStart(2, '0')
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    console.log(days, hours, mins, secs)
    return { days, hours, mins, secs }

}

function updateClockSpan({ days, hours, mins, secs }) {
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = mins;
    secondsRef.textContent = secs;

    return
}
