let startbtn2 = document.querySelector('#start2');
let resetbtn2 = document.querySelector('#reset2');
let total=0;

let timerFunction = function () {
    total = total - 1;
    let minute = Math.floor(total / 60);
    let second = total % 60;

    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    let timenow = minute + ':' + second;

    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = timenow;
}

var a;
startbtn2.onclick = function () {
    
    let min = Number(document.querySelector('#m_timer').value);
    let sec = Number(document.querySelector('#s_timer').value);
    total = min * 60 + sec;
    

    let curState = document.querySelector('#start2').textContent;
    if (curState === 'start' && total !== 0) {
        document.querySelector('#start2').textContent = 'stop';
        a = setInterval(timerFunction, 1000);

    } else {
        document.querySelector('#start2').textContent = 'start';
        clearInterval(a); 
    }
}

resetbtn2.onclick = function () {
    total = 0;
    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = '00:00';
}