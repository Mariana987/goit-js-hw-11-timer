const daysRef = document.querySelector('[data-value="days"]');
console.log(daysRef)
const hoursRef = document.querySelector('[data-value="hours"]');
console.log(hoursRef)
const minutesRef = document.querySelector('[data-value="mins"]');
console.log(minutesRef)
const secondsRef = document.querySelector('[data-value="secs"]');
console.log(secondsRef)

const data1 = Date.now()
console.log(data1)



// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),


// });


class CountdownTimer {
    constructor({ targetDate, selectorTimer }) {
        this.selectorTimer = document.querySelector(selectorTimer);
        console.log(this.selectorTimer);
        this.targetDate = targetDate;

        // this.onTick = onTick;
        // this.refs = {
        //     days: this.selectorTimer.querySelector('[data-value="days"]'),
        //     hours: this.selectorTimer.querySelector('[data-value="hours"]'),
        //     mins: this.selectorTimer.querySelector('[data-value="mins"]'),
        //     secs: this.selectorTimer.querySelector('[data-value="secs"]'),
        // };


    }

    start() {
        // const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now()
            // console.log('start => startTime', startTime)
            const deltaTime = this.targetDate - currentTime
            console.log(this.targetDate - currentTime)
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            // console.log(`${days}: ${hours}: ${mins}: ${secs}`)
            updateClockSpan({ days, hours, mins, secs })
        }, 5000)
    }

    start()
}

// CountdownTimer.start()


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


// const timer = new CountdownTimer({
//     selectorTimer: '#timer-1',
//     targetDate: new Date('Aug 31, 2021'),
//     // onTick: updateClock,
// });
