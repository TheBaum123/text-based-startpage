setTimeout(() => {
    if (wallpapersLinksArray && enableCustomWallpapers != 0) {
        if (
            wallpapersLinksArray.length - 1 < wallpapersCycleIndex ||
            wallpapersCycleIndex == null
        ) {
            wallpapersCycleIndex = 0;
        }

        document.body.style.backgroundImage = `url("${wallpapersLinksArray[wallpapersCycleIndex]}")`;

        wallpapersCycleIndex++;
        localStorage.setItem(
            "text-startpage:wallpaperCycleIndex",
            JSON.stringify(wallpapersCycleIndex)
        );
    }

    localStorage.setItem(
        "text-startpage:wallpapers",
        JSON.stringify(wallpapersLinksArray)
    );
}, 10);
