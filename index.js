 
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "“Be yourself; everyone else is already taken.”― Oscar Wilde",
    "“So many books, so little time.”― Frank Zappa",
    "“It is better to be hated for what you are than to be loved for what you are not.”― Andre Gide, Autumn Leaves"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

 
document.getElementById("quoteButton").addEventListener("click", generateQuote);