let clockSeperator = localStorage.getItem("text-startpage:clockSeperator")
if(clockSeperator == "" || clockSeperator == null) {
    clockSeperator = "|"
}

const clockInterval = setInterval(() => {
    let time = new Date()
    let monthNames =
    [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ]
    let outputTime = `${twoDigit(time.getHours())} ${clockSeperator} ${twoDigit(time.getMinutes())} ${clockSeperator} ${twoDigit(time.getSeconds())}`
    let outputDate = `${twoDigit(time.getDate())} ${clockSeperator} ${monthNames[time.getMonth()]} ${clockSeperator} ${time.getFullYear()}`
    $("#greetings-container>:nth-child(2)>:first-child").html(outputTime)
    $("#greetings-container>:nth-child(2)>:last-child").html(outputDate)
}, 1000);

function twoDigit(num) {
    fixedNum = 0
    if(num.toString().length == 1) {
        fixedNum = `0${num}`
    } else {
        fixedNum = num.toString()
    }
    return(fixedNum)
}