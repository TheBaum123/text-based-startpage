const enableBookmarksCheckbox = document.getElementById(
    "enable-bookmarks-checkbox"
);

let enableBookmarks = JSON.parse(
    localStorage.getItem("text-startpage:enableBookmarks")
);

enableBookmarksCheckbox.checked = enableBookmarks;

enableBookmarksCheckbox.addEventListener("change", () => {
    enableBookmarks = enableBookmarksCheckbox.checked;
    localStorage.setItem("text-startpage:enableBookmarks", enableBookmarks);
});
