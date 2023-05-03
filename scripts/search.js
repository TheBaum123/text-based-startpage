let searchInputField = document.getElementById("search-input")
let userSearchInput = encodeURIComponent(document.getElementById("search-input").value)
const validateIP = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$\b/
const validIPWithPort = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/
const validateURL = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i
const validateReddit = /^[ru]\/[A-Za-z1-9-_]{1,21}$/

setTimeout(() => {
    searchInputField.placeholder = `Search ${selectedSearchEngine}`
}, 10);

document.addEventListener("keyup", (e) => {
    userSearchInput = encodeURIComponent(document.getElementById("search-input").value)
    if(document.activeElement == searchInputField) return
    searchInputField.focus()
    if(e.key.length == 1) searchInputField.value = searchInputField.value + e.key
})

searchInputField.addEventListener("change", () => {
    search()
})

function search() {
    if(!userSearchInput) return
    userSearchInput = encodeURIComponent(document.getElementById("search-input").value)
    if(Object.keys(availableDirectLinks).includes(decodeURIComponent(userSearchInput))) {
        window.location.assign(availableDirectLinks[userSearchInput])
    } else if(validateIP.test(userSearchInput) || validIPWithPort.test(decodeURIComponent(userSearchInput))) {
        window.location.assign("http://" + userSearchInput)
    } else if(validateURL.test(decodeURIComponent(userSearchInput))) {
        window.location.assign(userSearchInput)
    } else if(validateReddit.test(decodeURIComponent(userSearchInput))) {
        window.location.assign(`https://reddit.com/${userSearchInput}`)
    } else if(checkSearch() != false) {
        window.location.assign(checkSearch())
    } else {
        window.location.assign(availableSearchEngines[selectedSearchEngine] + userSearchInput)
    }
}

function checkSearch() {
    let decodeSearch = decodeURIComponent(userSearchInput)
    if(decodeSearch.includes(":")) {
        let splitUserInput = decodeSearch.split(":")
        if(Object.keys(availableSearchEngines).includes(splitUserInput[0])) {
            return(availableSearchEngines[splitUserInput[0]] + splitUserInput[1])
        } else if(Object.keys(availableSearchSites).includes(splitUserInput[0])) {
            return(availableSearchSites[splitUserInput[0]] + splitUserInput[1])
        } 
    } else {
            return(false)
        }
}