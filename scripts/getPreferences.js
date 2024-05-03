//search engine
let selectedSearchEngine = "";
localStorage.getItem("text-startpage:selectedSearchEngine")
    ? (selectedSearchEngine = localStorage.getItem(
          "text-startpage:selectedSearchEngine"
      ))
    : (selectedSearchEngine = "duckduckgo");

//theme
document
    .querySelector(":root")
    .classList.add(localStorage.getItem("text-startpage:theme"));

//custom theme colors
let customBackgroundColor = localStorage.getItem(
    "text-startpage:custom-background-color"
);
let customLightBackgroundColor = localStorage.getItem(
    "text-startpage:custom-light-background-color"
);
let customTextColor = localStorage.getItem("text-startpage:custom-text-color");
let customLightTextColor = localStorage.getItem(
    "text-startpage:custom-light-text-color"
);
let customHighlighterColor = localStorage.getItem(
    "text-startpage:custom-highlighter"
);

//custom page title
let enableCustomTitle = JSON.parse(
    localStorage.getItem("text-startpage:enableCustomTitle")
);
let customTitle = localStorage.getItem("text-startpage:customTitle");

//greeting
let enableGreeting = "";
localStorage.getItem("text-startpage:enableGreeting")
    ? (enableGreeting = localStorage.getItem("text-startpage:enableGreeting"))
    : (enableGreeting = false);
let greetingText = "";
localStorage.getItem("text-startpage:greetingText")
    ? (greetingText = localStorage.getItem("text-startpage:greetingText"))
    : (greetingText = null);
let greetingName = localStorage.getItem("text-startpage:greetingName")
    ? localStorage.getItem("text-startpage:greetingName")
    : null;

//clock
let enableClock = localStorage.getItem("text-startpage:enableClock");
let clockSeperator = localStorage.getItem("text-startpage:clockSeperator");
let dateSeperator = localStorage.getItem("text-startpage:dateSeperator");

//quote
let enableQuote = localStorage.getItem("text-startpage:enableQuote");

//wallpapers
let wallpapersLinksArray =
    JSON.parse(localStorage.getItem("text-startpage:wallpapers")) || 0;
let wallpapersCycleIndex =
    JSON.parse(localStorage.getItem("text-startpage:wallpaperCycleIndex")) || 0;
let enableCustomWallpapers =
    JSON.parse(localStorage.getItem("text-startpage:enableCustomWallpapers")) ||
    0;

//bookmarks
let bookmarks = JSON.parse(localStorage.getItem("text-startpage:bookmarks"));
if (!bookmarks && !bookmarks == "") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "json/defaultBookmarks.json");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            localStorage.setItem(
                "text-startpage:bookmarks",
                JSON.stringify(xhr.response)
            );
            window.location.reload();
        } else {
            const errorSpan = document.createElement("span");
            const errorText = document.createTextNode("ERROR: " + xhr.status);
            errorSpan.appendChild(errorText);
            document
                .getElementById("bookmarks-container")
                .appendChild(errorSpan);
        }
    };
}

if (bookmarks == "") {
    document.body.removeChild(document.getElementById("bookmarks-container"));
    document.getElementById("search-container").style.top = "50vh";
    document.getElementById("search-container").style.transform =
        "translate(-50%, -50%)";
}

//set the theme
if (localStorage.getItem("text-startpage:theme") == "custom") {
    const colorsToInject = document.createElement("style");
    colorsToInject.innerText = `
        .custom {
            --background-color: ${customBackgroundColor};
            --light-background-color: ${customLightBackgroundColor};
            --text-color: ${customTextColor};
            --light-text-color: ${customLightTextColor};
            --highlight-color: ${customHighlighterColor};
        }
    `;
    document.head.appendChild(colorsToInject);
}

//set custom page title
if (enableCustomTitle) {
    if (customTitle) {
        document.title = customTitle;
        console.log(customTitle);
    } else {
        document.title = "​";
    }
}
