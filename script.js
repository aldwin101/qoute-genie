let apiQuotes = [];

// Show random quote
function randomQuote() {
    // select random quote from the api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get quotes from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        randomQuote();
    } catch (error) {
        // Catch error here
    }
}

// On load
getQuotes();