/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/

let quotes = [
  {quote: "Hasta la vista, baby.", source: "Arnold Schwarzenegger", citation: "Terminator 2: Judgment Day", year: 1991},
  {quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.", source: "Tom Hanks", citation: "Forrest Gump", year: 1994},
  {quote: "Oh, I say it, and I say it again. You been had. You been took. You been hoodwinked, bamboozled, led astray, run amuck!", source: "Denzel Washington", citation: "Malcolm X", year: 1992},
  {quote: "All my life I had to fight. I had to fight my daddy. I had to fight my uncles. I had to fight my brothers. A girl child ain’t safe in a family of mens. But I ain’t never thought I’d have to fight in my own house!", source: "Oprah Winfrey", citation: "The Color Purple", year: 1985},
  {quote: "I guess it comes down to a simple choice, really: Get busy living, or get busy dying.", source: "Tim Robbins", citation: "The Shawshank Redemption", year: 1994}
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length - 1 ) + 1;
  //console.log(randomNumber);
  //console.log( quotes[randomNumber] );
  return quotes[randomNumber];
}

//getRandomQuote();

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuoteObject = getRandomQuote();
  let htmlString = `
  <p class="quote">${randomQuoteObject.quote}</p>
  <p class="source">${randomQuoteObject.source}
  `;
  
  //console.log(randomQuoteObject.citation);
  console.log(htmlString);
  //getRandomQuote();

  if ( randomQuoteObject.hasOwnProperty('citation') ) {
    htmlString += `<span class="citation">${randomQuoteObject.citation}</span>`;
  };

  if ( randomQuoteObject.hasOwnProperty('year') ) {
    htmlString += `<span class="year">${randomQuoteObject.year}</span>`;
  };

  htmlString += `</p>`;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);