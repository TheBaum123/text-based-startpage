const dropdown = document.getElementById("theme-selector")
const customSelectorsWrapper = document.getElementById("custom-color-selector")
const selectionWrapperChildren = customSelectorsWrapper.children

let customBackgroundColor = localStorage.getItem("text-startpage:custom-background-color")
let customLightBackgroundColor = localStorage.getItem("text-startpage:custom-light-background-color")
let customTextColor = localStorage.getItem("text-startpage:custom-text-color")
let customLightTextColor = localStorage.getItem("text-startpage:custom-light-text-color")
let customHighlighterColor = localStorage.getItem("text-startpage:custom-highlighter")

if(localStorage.getItem("text-startpage:theme")) {
    dropdown.value = localStorage.getItem("text-startpage:theme")
}

if(dropdown.value == "custom") {
    customSelectorsWrapper.style.display = "flex"
} else {
    customSelectorsWrapper.style.display = "none"
}

dropdown.addEventListener("change", () => {
    if(dropdown.value == "custom") {
        customSelectorsWrapper.style.display = "flex"
    } else {
        customSelectorsWrapper.style.display = "none"
    }
    localStorage.setItem("text-startpage:theme", dropdown.value)
})

setTimeout(() => {
    Object.values(selectionWrapperChildren).forEach(e => {
        e.value = localStorage.getItem("text-startpage:custom-" + e.id)
        if(e.tagName == "INPUT") {
            e.addEventListener("change", () => {
                localStorage.setItem("text-startpage:custom-" + e.id, e.value)
            })
        }
    })
}, 10); 