document.getElementById("theme-selector").value = localStorage.getItem("text-startpage:theme")

document.getElementById("theme-selector").addEventListener("change", () => {
    localStorage.setItem("text-startpage:theme", document.getElementById("theme-selector").value)
})