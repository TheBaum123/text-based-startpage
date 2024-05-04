const enableBookmarksCheckbox = document.getElementById(
    "enable-bookmarks-checkbox"
);
const enableBookmarksLayoutshiftCheckbox = document.getElementById(
    "enable-bookmarks-layoutshift-checkbox"
);

let enableBookmarks = JSON.parse(
    localStorage.getItem("text-startpage:enableBookmarks")
);
let enableLayoutShift = JSON.parse(
    localStorage.getItem("text-startpage:enableBookmarksLayoutShift")
);

if (enableBookmarks == null) {
    enableBookmarks = true;
}

enableBookmarksCheckbox.checked = enableBookmarks;

enableBookmarksCheckbox.addEventListener("change", () => {
    enableBookmarks = enableBookmarksCheckbox.checked;
    localStorage.setItem(
        "text-startpage:enableBookmarks",
        JSON.stringify(enableBookmarks)
    );
});

enableBookmarksLayoutshiftCheckbox.checked = enableLayoutShift;
enableBookmarksLayoutshiftCheckbox.addEventListener("change", () => {
    enableLayoutShift = enableBookmarksLayoutshiftCheckbox.checked;
    localStorage.setItem(
        "text-startpage:enableBookmarksLayoutShift",
        JSON.stringify(enableLayoutShift)
    );
});
