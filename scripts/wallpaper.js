setTimeout(() => {
    if (wallpapersLinksArray && enableCustomWallpapers != 0) {
        if (
            wallpapersLinksArray.length - 1 < wallpapersCycleIndex ||
            wallpapersCycleIndex == null
        ) {
            wallpapersCycleIndex = 0;
        }

        document.body.style.backgroundImage = `url("${wallpapersLinksArray[wallpapersCycleIndex]}")`;
        document.getElementById("bookmarks-container").style.backgroundColor =
            "color-mix(in oklab, #00000000 15%, var(--light-background-color) 85%)";
        document.getElementById("greetings-container").style.backgroundColor =
            "color-mix(in oklab, #00000000 15%, var(--light-background-color) 85%)";
        document.getElementById(
            "settings-icon-top-right"
        ).style.backgroundColor =
            "color-mix(in oklab, #00000000 15%, var(--light-background-color) 85%)";

        document.getElementById("bookmarks-container").style.backdropFilter =
            "blur(5px)";
        document.getElementById("greetings-container").style.backdropFilter =
            "blur(5px)";
        document.getElementById(
            "settings-icon-top-right"
        ).style.backdropFilter = "blur(5px)";

        wallpapersCycleIndex++;
        localStorage.setItem(
            "text-startpage:wallpaperCycleIndex",
            JSON.stringify(wallpapersCycleIndex)
        );
    }
}, 10);
