//wait for other scripts to load first
setTimeout(() => {
    if (clockSeperator == "" || clockSeperator == null) {
        clockSeperator = "|";
    }
    if (dateSeperator == "" || dateSeperator == null) {
        dateSeperator = "|";
    }
    updateTime();
}, 10);

//update clock every second
const clockInterval = setInterval(() => {
    updateTime();
}, 1000);

//function to update the clock
function updateTime() {
    let time = new Date();
    let monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let outputTime = `${twoDigit(time.getHours())} ${clockSeperator} ${twoDigit(
        time.getMinutes()
    )} ${clockSeperator} ${twoDigit(time.getSeconds())}`;
    let outputDate = `${twoDigit(time.getDate())} ${dateSeperator} ${
        monthNames[time.getMonth()]
    } ${dateSeperator} ${time.getFullYear()}`;
    document.getElementById("time-display").innerText = outputTime;
    document.getElementById("date-display").innerText = outputDate;
}

//function to prefix single digit numbers with 0 for consistancy
function twoDigit(num) {
    fixedNum = 0;
    if (num.toString().length == 1) {
        fixedNum = `0${num}`;
    } else {
        fixedNum = num.toString();
    }
    return fixedNum;
}
