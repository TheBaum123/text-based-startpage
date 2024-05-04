setTimeout(() => {
    if (enableQuote != "false" && enableBookmarks) {
        const randomQuotesXhr = new XMLHttpRequest();
        randomQuotesXhr.open("GET", "json/quotes.json");
        randomQuotesXhr.send();
        randomQuotesXhr.responseType = "json";
        randomQuotesXhr.onload = () => {
            const quotesArray = randomQuotesXhr.response.quotes;
            const chosenQuoteId = Math.floor(
                Math.random() * quotesArray.length
            );
            const qouteOutput = `${quotesArray[chosenQuoteId].quote} - ${quotesArray[chosenQuoteId].author}`;
            document.getElementById("random-quote").innerHTML = qouteOutput;
        };
    }
}, 10);
