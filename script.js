const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 7460;
let interval = null;

function timer ()  {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor ((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    time_el.innerText = '${hrs}:${mins}:${secs}';
}
