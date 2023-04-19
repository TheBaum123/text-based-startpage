let availableSearchEngines = {}
let selectedSearchEngine = ""
selectedSearchEngine = localStorage.getItem("text-startpage:selectedSearchEngine")

const xhrSearchEngines = new XMLHttpRequest()
xhrSearchEngines.open("GET", "json/searchEngines.json")
xhrSearchEngines.responseType = "json"
xhrSearchEngines.send()
xhrSearchEngines.onload = () => {
    availableSearchEngines = xhrSearchEngines.response
    appendSearchEnginesToSelection()
}

function appendSearchEnginesToSelection() {
    for(let i = 0; i < Object.keys(availableSearchEngines).length; i++) {
        const optionToAdd = new Option(Object.keys(availableSearchEngines)[i], Object.keys(availableSearchEngines)[i])
        document.getElementById("search-engine-select").appendChild(optionToAdd)
    }
    if(Object.keys(availableSearchEngines).includes(selectedSearchEngine)) document.getElementById("search-engine-select").value = selectedSearchEngine
}

document.getElementById("search-engine-select").addEventListener("change", (e) => {
    localStorage.setItem("text-startpage:selectedSearchEngine", document.getElementById("search-engine-select").value)
})