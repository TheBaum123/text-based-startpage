const enableCustomTitleCheckbox = document.getElementById("enable-custom-title")
const customPageTitleInput = document.getElementById("custom-title")

enableCustomTitleCheckbox.checked = JSON.parse(localStorage.getItem("text-startpage:enableCustomTitle"))
customPageTitleInput.value = localStorage.getItem("text-startpage:customTitle")

enableCustomTitleCheckbox.addEventListener("change", () => {
    localStorage.setItem("text-startpage:enableCustomTitle", JSON.stringify(enableCustomTitleCheckbox.checked))
})

customPageTitleInput.addEventListener("change", () => {
    localStorage.setItem("text-startpage:customTitle", customPageTitleInput.value)
})