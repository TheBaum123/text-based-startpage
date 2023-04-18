let availableDirectLinks = {}
let availableSearchSites = {}
let availableSearchEngines = {}

{
    const xhr1 = new XMLHttpRequest()
    xhr1.open("GET", "json/directLinks.json")
    xhr1.responseType = "json"
    xhr1.send()
    xhr1.onload = () => {
        availableDirectLinks = xhr1.response
    }

    const xhr2 = new XMLHttpRequest()
    xhr2.open("GET", "json/searchSites.json")
    xhr2.responseType = "json"
    xhr2.send()
    xhr2.onload = () => {
        availableSearchSites = xhr2.response
    }

    const xhr3 = new XMLHttpRequest()
    xhr3.open("GET", "json/searchEngines.json")
    xhr3.responseType = "json"
    xhr3.send()
    xhr3.onload = () => {
        availableSearchEngines = xhr3.response
    }
}