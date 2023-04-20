const enableClockInput = document.getElementById("enable-clock")
const clockSeperatorInput = document.getElementById("clock-seperator-input")

let enableClock = localStorage.getItem("text-startpage:enableClock")
let clockSeperator = localStorage.getItem("text-startpage:clockSeperator")

if(enableClock == "true") enableClockInput.checked = true
if(clockSeperator) clockSeperatorInput.value = clockSeperator

enableClockInput.addEventListener("change", () => {
    if(!enableClockInput.checked) {
        localStorage.setItem("text-startpage:enableClock", false)
        localStorage.setItem("text-startpage:clockSeperator", "")
        clockSeperatorInput.value = ""
    } else {
        localStorage.setItem("text-startpage:enableClock", true)
        localStorage.setItem("text-startpage:clockSeperator", clockSeperatorInput.value)
    }
})

clockSeperatorInput.addEventListener("change", () => {
    if(!enableClockInput.checked) {
        localStorage.setItem("text-startpage:clockSeperator", "")
    } else {
        localStorage.setItem("text-startpage:clockSeperator", clockSeperatorInput.value)
    }
})