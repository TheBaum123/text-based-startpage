let injector = document.createElement("script")
injector.src = "scripts/injector.js"
document.body.appendChild(injector)

document.querySelector("ion-icon[name=\"settings-outline\"]").addEventListener("click", () => {
    window.location.assign("/preferences.html")
})


// TODO: get search completion results with https://api.allorigins.win/get?url=