
const refs = {
    timer: document.querySelector('[data-value="timer-view"]'),
    start: document.getElementById('start'),
    wait: document.getElementById('wait'),
    reset: document.getElementById('reset'),
}

let hours = 0;
let min = 0;
let sec = 0;
let interval = null;
let counter = 0;


function render() {
    let hoursString = hours < 10 ? '0' + hours : hours;
    let minString = min < 10 ? '0' + min : min;
    let secString = sec < 10 ? '0' + sec : sec;
    let timer = hoursString + ':' + minString + ':' + secString;
    refs.timer.innerHTML = timer;
}

function calculateNextTimerValues() {
    sec = sec + 1;
    if (sec > 59) {
        sec = 0;
        min++;
    }

    if (min > 59) {
        min = 0;
        hours++;
    }

}

function onSecondChange() {

    calculateNextTimerValues();
    render();

};

refs.start.onclick = function () {
    interval = setInterval(onSecondChange, 1000);
    refs.start.disabled = true;
}


console.log(counter);
refs.wait.onclick = function () {
    counter++;
    console.log(counter);
    setTimeout(() => {
        if (counter >= 2) {
            clearInterval(interval);
            refs.start.disabled = false;
            counter = 0;
        }
        else {
            counter = 0
        }
    }, 300);

}

refs.reset.onclick = function () {
    clearInterval(interval);
    refs.timer.innerHTML = '00:00:00';
    refs.start.disabled = false;
    hours = 0;
    min = 0;
    sec = 0;
}
