const enableCustomWallpapersCheck = document.getElementById(
    "enable-custom-wallpapers-check"
);
const customWallpapersArrayInput = document.getElementById(
    "custom-wallpapers-array-input"
);

let enableCustomWallpaper = JSON.parse(
    localStorage.getItem("text-startpage:enableCustomWallpapers") || false
);
let customWallpapersArray = localStorage.getItem("text-startpage:wallpapers");

enableCustomWallpapersCheck.checked = enableCustomWallpaper;
customWallpapersArrayInput.value = customWallpapersArray;

enableCustomWallpapersCheck.addEventListener("change", () => {
    enableCustomWallpaper = enableCustomWallpapersCheck.checked;
    localStorage.setItem(
        "text-startpage:enableCustomWallpapers",
        JSON.stringify(enableCustomWallpaper)
    );
});

customWallpapersArrayInput.addEventListener("change", () => {
    customWallpapersArray = customWallpapersArrayInput.value;
    localStorage.setItem("text-startpage:wallpapers", customWallpapersArray);
});
