let greetingsShown = false;
setTimeout(() => {
    if (enableGreeting == "true" && (greetingText || greetingName)) {
        document.getElementById("greetings-text").innerText = `${
            greetingText ? greetingText : ""
        } ${greetingText && greetingName ? ", " : ""} ${
            greetingName ? greetingName : ""
        }.`;
        greetingsShown = true;
    } else {
        greetingsShown = false;
    }
}, 10);

setTimeout(() => {
    if (enableClock == "true") {
        document.getElementById("clock-container").style.top = 0;
    }
}, 10);

setTimeout(() => {
    if (greetingsShown == true || enableClock == "true") {
        document.getElementById("greetings-container").style.top = "2.5vh";
    }
}, 20);
