
const refs = {
    hours: document.querySelector('[data-value="hours"]'),
    min: document.querySelector('[data-value="mins"]'),
    sec: document.querySelector('[data-value="secs"]'),
    start: document.getElementById('start'),
    wait: document.getElementById('wait'),
    reset: document.getElementById('reset'),
}

console.log(refs.start);
let hours = 0;
let min = 0;
let sec = 0;
let interval = null;
let counter = 0;

console.log(refs.wait);
function count() {
    sec = sec + 1;
    if (sec < 9) {
        refs.sec.innerHTML = '0' + sec;
    }
    if (sec > 9 && sec < 60) {
        refs.sec.innerText = sec;
    }
    if (sec > 59) {
        min = min + 1;
        sec = 0;
        // refs.hours.innerText = hours + "0:";
        refs.min.innerText = '0' + min + ':';
        refs.sec.innerText = sec + '0';
    }

    if (min > 9 && min < 60) {
        // refs.hours.innerText = hours + "0:";
        refs.min.innerText = min + ':';
        // refs.sec.innerText = sec + '0:';
    }

    if (min > 59) {
        hours = hours + 1;
        min = 0;
        sec = 0;
        refs.hours.innerText = '0' + hours + ":";
        refs.min.innerText = min + '0:';
        // refs.sec.innerText = sec + '0:';
    }

};

refs.start.onclick = function () {
    interval = setInterval(count, 2);
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
    refs.hours.innerText = '00:';
    refs.min.innerText = '00:';
    refs.sec.innerText = '00';
    refs.start.disabled = false;
}
