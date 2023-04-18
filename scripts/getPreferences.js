//search engine
let selectedSearchEngine = ""
localStorage.getItem("text-startpage:selectedSearchEngine") ? selectedSearchEngine = localStorage.getItem("text-startpage:selectedSearchEngine") : selectedSearchEngine = "duckduckgo"

//greeting
let enableGreeting = "" 
localStorage.getItem("text-startpage:enableGreeting") ? enableGreeting = localStorage.getItem("text-startpage:enableGreeting") : enableGreeting = false
let greetingText = ""
localStorage.getItem("text-startpage:greetingText") ? greetingText = localStorage.getItem("text-startpage:greetingText") : greetingText = "Hello"
let greetingName = localStorage.getItem("text-startpage:greetingName")

//clock
let clockSeperator = localStorage.getItem("text-startpage:clockSeperator")

//bookmarks
let bookmarks = JSON.parse(localStorage.getItem("text-startpage:bookmarks"))
if(!bookmarks) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "json/defaultBookmarks.json")
    xhr.responseType = "json"
    xhr.send()
    xhr.onload = () => {
        if(xhr.status == 200) {
            localStorage.setItem("text-startpage:bookmarks", JSON.stringify(xhr.response))
            window.location.reload()
        } else {
            const errorSpan = document.createElement("span")
            const errorText = document.createTextNode("ERROR: " + xhr.status)
            errorSpan.appendChild(errorText)
            document.getElementById("bookmarks-container").appendChild(errorSpan)
        }
    }
}