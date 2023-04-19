const enableGreetingCheckbox = document.getElementById("enable-greeting")
const greetingTextInput = document.getElementById("greeting-text")
const greetingNameInput = document.getElementById("greeting-name")

let enableGreeting = localStorage.getItem("text-startpage:enableGreeting")
let greetingText = localStorage.getItem("text-startpage:greetingText")
let greetingName = localStorage.getItem("text-startpage:greetingName")

enableGreetingCheckbox.checked = enableGreeting ? enableGreeting == "true" : enableGreeting != "true"
greetingTextInput.value = greetingText
greetingNameInput.value = greetingName

enableGreetingCheckbox.addEventListener("change", () => {
    localStorage.setItem("text-startpage:enableGreeting", enableGreetingCheckbox.checked)
    enableGreeting = enableGreetingCheckbox.checked
    if(!enableGreeting) {
        greetingNameInput.value = ""
        greetingTextInput.value = ""
        localStorage.setItem("text-startpage:greetingText", "")
        localStorage.setItem("text-startpage:greetingName", "")
        greetingName = ""
        greetingText = ""
    }
})

greetingTextInput.addEventListener("change", () => {
    localStorage.setItem("text-startpage:greetingText", greetingTextInput.value)
})

greetingNameInput.addEventListener("change", () => {
    localStorage.setItem("text-startpage:greetingName", greetingNameInput.value)
})