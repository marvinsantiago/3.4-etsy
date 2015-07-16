var timeEl = document.getElementsByClassName('time')[0];
var buttonEl = document.getElementsByTagName('button')[0];

var interval;

function padZeros (num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

function buttonHasBeenClicked () {
    window.clearInterval(interval);

    timeEl.innerHTML = '01:00';
    buttonEl.innerHTML = 'Reset';
    var finishTime = new Date().valueOf() + 1000 * 1 * 60;

    var renderTimeSince = function () {
        var currentTime = new Date().valueOf();
        var timeDiff = finishTime - currentTime;
        var secSinceStart =  parseInt(timeDiff / 1000) % 60;
        var minSinceStart =  parseInt(timeDiff / 60000);

        timeEl.innerHTML = padZeros(minSinceStart) + ':' + padZeros(secSinceStart);

        if (secSinceStart <= 0 && minSinceStart <= 0) {
            window.clearInterval(interval);
        }
    };

    interval = window.setInterval(renderTimeSince, 1000);
}

buttonEl.onclick = buttonHasBeenClicked;
