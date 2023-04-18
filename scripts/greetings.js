const greetingTimeout = setTimeout(() => {
    if(enableGreeting == "true" && greetingText && greetingName) {
        $("#greetings-container>:nth-child(1)>span").html(`${greetingText}, ${greetingName}.`)
    } else if(enableGreeting == "true") {
        $("#greetings-container>:nth-child(1)>span").html("Greetings on, no info.")
    }
}, 1000);