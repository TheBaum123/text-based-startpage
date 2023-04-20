let enableQuote = localStorage.getItem("text-startpage:enableQuote")

const enableQuoteInput = document.getElementById("enable-quote")

if(enableQuote != "false") {
    enableQuoteInput.checked = true
}

enableQuoteInput.addEventListener("change", () => {
    localStorage.setItem("text-startpage:enableQuote", enableQuoteInput.checked)
    enableQuote = enableQuoteInput.checked
})