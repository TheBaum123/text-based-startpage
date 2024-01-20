let injector = document.createElement("script");
injector.src = "scripts/preferences/injector.js";
document.body.appendChild(injector);

document
    .querySelector(":root")
    .classList.add(localStorage.getItem("text-startpage:theme"));
