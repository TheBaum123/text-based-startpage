let scriptsToInject = ["jquery", "clock", "getPreferences", "getjson", "search", "bookmarks", "greetings", "randomQuote"]
let stylesToInject = ["main", "greetings", "searchBar", "bookmarks", "themes"]

for(let i = 0; i < scriptsToInject.length; i++) {
    let scriptToInject = document.createElement("script")
    scriptToInject.src = `scripts/${scriptsToInject[i]}.js`
    document.body.appendChild(scriptToInject)
}

for(let i = 0; i < stylesToInject.length; i++) {
    let styleToInject = document.createElement("link")
    styleToInject.href = `styles/${stylesToInject[i]}.css`
    styleToInject.rel = "stylesheet"
    document.head.appendChild(styleToInject)
}

let ionicons1 = document.createElement("script")
ionicons1.type = "module"
ionicons1.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
document.body.appendChild(ionicons1)

let ionicons2 = document.createElement("script")
ionicons2.noModule = true
ionicons2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
document.body.appendChild(ionicons2)

let favicon = document.createElement("link")
favicon.rel = "icon"
favicon.type = "image/x-icon"
favicon.href = "https://thebaum123.github.io/favicon.png"
document.head.appendChild(favicon)

let gfonts1 = document.createElement("link")
gfonts1.rel = "preconnect"
gfonts1.href = "https://fonts.googleapis.com"
document.head.appendChild(gfonts1)

let gfonts2 = document.createElement("link")
gfonts2.rel = "preconnect"
gfonts2.href = "https://fonts.gstatic.com"
gfonts2.crossOrigin = ""
document.head.appendChild(gfonts2)

let gfonts3 = document.createElement("link")
gfonts3.href = "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
gfonts3.rel = "stylesheet"
document.head.appendChild(gfonts3)