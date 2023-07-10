const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
let apiQuotes = [];

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading after data has been loaded into DOM
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


// Show random quote
function randomQuote() {
    loading();
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
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    complete();
}

// Get quotes from api
async function getQuotes() {
    loading();
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
