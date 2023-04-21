let injector = document.createElement("script")
injector.src = "scripts/injector.js"
document.body.appendChild(injector)

document.querySelector("ion-icon[name=\"settings-outline\"]").addEventListener("click", () => {
    window.location.assign("https://thebaum123.github.io/text-based-startpage/preferences")
})


// TODO: get search completion results with https://api.allorigins.win/get?url=