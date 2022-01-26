//Quotes creates an array to hold objects that keep quote information.

let quotes = [{
    quote: "Hasta la vista, baby.",
    source: "Arnold Schwarzenegger",
    citation: "Terminator 2: Judgment Day",
    year: 1991
  },
  {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Tom Hanks",
    citation: "Forrest Gump",
    year: 1994
  },
  {
    quote: "Oh, I say it, and I say it again. You been had. You been took. You been hoodwinked, bamboozled, led astray, run amuck!",
    source: "Denzel Washington",
    citation: "Malcolm X",
    year: 1992
  },
  {
    quote: "All my life I had to fight. I had to fight my daddy. I had to fight my uncles. I had to fight my brothers. A girl child ain’t safe in a family of mens. But I ain’t never thought I’d have to fight in my own house!",
    source: "Oprah Winfrey",
    citation: "The Color Purple",
    year: 1985
  },
  {
    quote: "I guess it comes down to a simple choice, really: Get busy living, or get busy dying.",
    source: "Tim Robbins",
    citation: "The Shawshank Redemption",
    year: 1994
  }
];

// The getRandomQuote function generates a random number from 0 to the last index in the quotes array and places that number inside the randomNumber variable. Then the function returns a quote utilizing that aforementioned variable.

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length - 1) + 1;
  return quotes[randomNumber];
}


// The printQuote function calls the getRandomQuote function and places what it returns in a new variable called "randomQuoteObject". Another new variable, "htmlString" is created that uses template literals to take the values of the randomQuoteObject and places them in an html formatted string. If it has citation and year properties, it adds those values to the html string and then closes the string with a closing paragraph tag.

function printQuote() {
  let randomQuoteObject = getRandomQuote();
  let htmlString = `
  <p class="quote">${randomQuoteObject.quote}</p>
  <p class="source">${randomQuoteObject.source}
  `;

  if (randomQuoteObject.hasOwnProperty('citation')) {
    htmlString += `<span class="citation">${randomQuoteObject.citation}</span>`;
  };

  if (randomQuoteObject.hasOwnProperty('year')) {
    htmlString += `<span class="year">${randomQuoteObject.year}</span>`;
  };

  htmlString += `</p>`;
  return document.getElementById('quote-box').innerHTML = htmlString;
}

printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);