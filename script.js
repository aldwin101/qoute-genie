let apiQuotes = [];

// Get quotes from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    } catch (error) {
        // Catch error here
    }
}

// On load
getQuotes();