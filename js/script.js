// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote: '"Don\'t quit. Suffer now and live the rest of your life as a champion"',
    source: "Muhammad Ali",
    citation: "Twitter",
    year: "2013",
    field: "Sportsman"
  },
  {
    quote: '"The person who reads too much and uses his brain too little will fall into lazy habits of thinking"',
    source: "Albert Einstein",
    field: "Scientist"
  },
  {
    quote: '"It is our choices, that show what we truly are, far more than our abilities"',
    source: "J.K. Rowling",
    citation: "Harry Potter and the Chamber of Secrets",
    year: "1998",
    field: "Author"
  },
  {
    quote: '"If a person has no dreams, they no longer have any reason to live. Dreaming is necessary, although in the dream reality should be glimpsed. For me this is the principle of life."',
    source: "Ayrton Senna",
    field: "Sportsman"
  },
  {
    quote: '"It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty; the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living"',
    source: "David Attenborough",
    year: "2000"
  }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var html = '';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  for (key in randomQuote) {
    if (key === 'citation') {
      html += '<span class="citation">' + randomQuote.citation + '</span>'
    }
    if (key === 'year') {
      html += '<span class="year">' + randomQuote.year + '</span>'
    }
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
