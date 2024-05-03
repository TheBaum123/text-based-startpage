const enableCustomWallpapersCheck = document.getElementById(
    "enable-custom-wallpapers-check"
);
const addWallpaperInput = document.getElementById("add-wallpaper-input");
const addWallpaperButton = document.getElementById("add-wallpaper-button");
const customWallpapersWrapper = document.getElementById(
    "custom-wallpapers-wrapper"
);

let enableCustomWallpaper = JSON.parse(
    localStorage.getItem("text-startpage:enableCustomWallpapers") || false
);
let customWallpapersArray = JSON.parse(
    localStorage.getItem("text-startpage:wallpapers") || []
);

enableCustomWallpapersCheck.checked = enableCustomWallpaper;

enableCustomWallpapersCheck.addEventListener("change", () => {
    enableCustomWallpaper = enableCustomWallpapersCheck.checked;
    localStorage.setItem(
        "text-startpage:enableCustomWallpapers",
        JSON.stringify(enableCustomWallpaper)
    );
});

for (let i = customWallpapersArray.length - 1; i >= 0; i--) {
    addWallpaperToList(customWallpapersArray[i], i);
}

addWallpaperButton.addEventListener("click", () => {
    customWallpapersArray.push(addWallpaperInput.value);
    localStorage.setItem(
        "text-startpage:wallpapers",
        JSON.stringify(customWallpapersArray)
    );
    addWallpaperToList(
        addWallpaperInput.value,
        customWallpapersArray.length - 1
    );
});

function addWallpaperToList(wallpaperLink, index) {
    const newWallpaperNode = document.createElement("div");
    const newWallpaperTextNode = document.createElement("a");
    const removeWallpaperButtonNode = document.createElement("button");

    newWallpaperNode.classList.add("setting-container");

    newWallpaperTextNode.innerText = wallpaperLink.substring(0, 20);
    newWallpaperTextNode.href = wallpaperLink;
    newWallpaperTextNode.target = "_blank";
    removeWallpaperButtonNode.innerText = "X";
    removeWallpaperButtonNode.onclick = () => {
        customWallpapersArray.splice(`${index}`, `${index}`);
        customWallpapersWrapper.removeChild(newWallpaperNode);
        localStorage.setItem(
            "text-startpage:wallpapers",
            JSON.stringify(customWallpapersArray)
        );
    };

    newWallpaperNode.appendChild(newWallpaperTextNode);
    newWallpaperNode.appendChild(removeWallpaperButtonNode);

    customWallpapersWrapper.appendChild(newWallpaperNode);
}
