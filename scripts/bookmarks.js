setTimeout(() => {
    if (enableBookmarks == false) return;
    for (let i = 0; i < Object.keys(bookmarks).length; i++) {
        const categoryDiv = document.createElement("div");
        const categoryHeading = document.createElement("span");
        categoryHeading.innerHTML = Object.keys(bookmarks)[i];
        categoryHeading.style.textDecoration = "underline";
        categoryDiv.appendChild(categoryHeading);
        const categoryBookmarks = bookmarks[Object.keys(bookmarks)[i]];
        for (let j = 0; j < Object.keys(categoryBookmarks).length; j++) {
            const bookmarkName = Object.keys(categoryBookmarks)[j];
            const bookmarkLinkStr =
                categoryBookmarks[Object.keys(categoryBookmarks)[j]];
            const bookmarkLink = document.createElement("a");
            bookmarkLink.href = bookmarkLinkStr;
            bookmarkLink.innerHTML = bookmarkName;
            categoryDiv.appendChild(bookmarkLink);
        }
        categoryDiv.classList.add("category-container");
        document.getElementById("bookmarks-container").appendChild(categoryDiv);
    }
}, 25);
