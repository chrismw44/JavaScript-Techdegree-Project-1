// FSJS - Random Quote Generator

// The array of quote objects
var quotes = [
  {
    quote: 'Don\'t quit. Suffer now and live the rest of your life as a champion',
    source: 'Muhammad Ali',
    citation: 'Twitter',
    year: '2013',
    profession: '(Professional Boxer)'
  },
  {
    quote: 'The person who reads too much and uses his brain too little will fall into lazy habits of thinking',
    source: 'Albert Einstein',
    profession: '(Scientist)'
  },
  {
    quote: 'It is our choices, that show what we truly are, far more than our abilities',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Chamber of Secrets',
    year: '1998',
    profession: '(Author)'
  },
  {
    quote: 'If a person has no dreams, they no longer have any reason to live. Dreaming is necessary, although in the dream reality should be glimpsed. For me this is the principle of life.',
    source: 'Ayrton Senna',
    profession: '(Formula 1 Racing Driver)'
  },
  {
    quote: 'It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty; the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living',
    source: 'David Attenborough',
    year: '2000'
  }
];

// Timer to change the quote automatically after 20 seconds
var intervalID = setInterval(printQuote, 20000);

// Function to select and return a random object from an array
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

// Function that creates random rgb numbers for the background color
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

// printQuote funtion to display the selected quote to the page
function printQuote() {
// The three random rgb numbers for the background color
  var rgb1 = randomRGB();
  var rgb2 = randomRGB();
  var rgb3 = randomRGB();
// A random quote object is selected
  var randomQuote = getRandomQuote(quotes);
// Create the completed quote string to be displayed
  var html = '';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
/*
Checks if the quote has a citation, year or profession property.
If so, they are added to the string to be displayed.
*/
  for (key in randomQuote) {
    if (key === 'citation') {
      html += '<span class="citation">' + randomQuote.citation + '</span>'
    }
    if (key === 'year') {
      html += '<span class="year">' + randomQuote.year + '</span>'
    }
    if (key === 'profession') {
      html += '<span class="profession">' + randomQuote.profession + '</span>'
    }
  }
  html += '</p>';
// Changes the background color of the page each time a new quote is displayed
  html += '<style>body { background-color: rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ');}</style>';
  html += '<style>#loadQuote { background-color: rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ');}</style>';
// Prints the quote to the page
  document.getElementById('quote-box').innerHTML = html;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
