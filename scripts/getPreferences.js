let selectedSearchEngine = ""
localStorage.getItem("text-startpage:selectedSearchEngine") ? selectedSearchEngine = localStorage.getItem("text-startpage:selectedSearchEngine") : selectedSearchEngine = "duckduckgo"
let enableGreeting = "" 
localStorage.getItem("text-startpage:enableGreeting") ? enableGreeting = localStorage.getItem("text-startpage:enableGreeting") : enableGreeting = false
let greetingText = ""
localStorage.getItem("text-startpage:greetingText") ? greetingText = localStorage.getItem("text-startpage:greetingText") : greetingText = "Hello"
let greetingName = localStorage.getItem("text-startpage:greetingName")