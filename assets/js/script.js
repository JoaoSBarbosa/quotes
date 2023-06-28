const btn = document.querySelector(".btn");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

const generateQuotes = () => {
  const index = Math.floor(Math.random() * quotes.length);
  quoteAuthor.textContent = quotes[index].author;
  quoteText.textContent = quotes[index].quote;
};
btn.addEventListener("click", generateQuotes);
