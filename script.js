const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];

// Show random quote
function randomQuote() {
    // select random quote from the api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author field is blank and replace it with unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
            authorText.textContent = quote.author;
        }

    // Check quote length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent = quote.text;
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


// Tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

// Event listeners
newQuoteBtn.addEventListener('click', randomQuote);
twitterBtn.addEventListener('click', tweetQuote)

// On load
getQuotes();