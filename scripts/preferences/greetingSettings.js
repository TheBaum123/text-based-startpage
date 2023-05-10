const enableGreetingCheckbox = document.getElementById("enable-greeting")
const greetingTextInput = document.getElementById("greeting-text")
const greetingNameInput = document.getElementById("greeting-name")
const greetingPreview = document.getElementById("greeting-preview")

let enableGreeting = localStorage.getItem("text-startpage:enableGreeting")
let greetingText = localStorage.getItem("text-startpage:greetingText")
let greetingName = localStorage.getItem("text-startpage:greetingName")

if(!enableGreeting) enableGreeting = false
enableGreetingCheckbox.checked = JSON.parse(enableGreeting)
greetingTextInput.value = greetingText
greetingNameInput.value = greetingName

if(enableGreeting == "true") {
    greetingPreview.innerHTML = `Greeting Preview: '${greetingTextInput.value}, ${greetingNameInput.value}.'`
}

document.addEventListener("keyup", () => {
    if(enableGreeting == "true" || enableGreeting == true) {
        greetingPreview.innerHTML = `Greeting Preview: '${greetingTextInput.value}, ${greetingNameInput.value}.'`
    }
})

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
    if(enableGreeting == "true" || enableGreeting == true) {
        greetingPreview.innerHTML = `Greeting Preview: '${greetingTextInput.value}, ${greetingNameInput.value}.'`
    } else {
        greetingPreview.innerHTML = ""
    }
})

greetingTextInput.addEventListener("change", () => {
    localStorage.setItem("text-startpage:greetingText", greetingTextInput.value)
})

greetingNameInput.addEventListener("change", () => {
    localStorage.setItem("text-startpage:greetingName", greetingNameInput.value)
})