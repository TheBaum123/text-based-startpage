const dropdown = document.getElementById("theme-selector")
const customSelectorsWrapper = document.getElementById("custom-color-selector")
const selectionWrapperChildren = customSelectorsWrapper.children

dropdown.value = localStorage.getItem("text-startpage:theme")

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
        if(e.tagName == "INPUT") {
            e.addEventListener("change", () => {
                localStorage.setItem("text-startpage:custom-" + e.id, e.value)
            })
        }
    })
}, 10); 