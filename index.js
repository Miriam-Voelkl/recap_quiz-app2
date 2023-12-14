// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// answer toggle
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerCard = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  answerCard.classList.toggle("card__answer--active");

  if (answerCard.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }

  /* springt erst beim zweiten klick um ??
 if (answerButton.textContent == "Show answer") {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }

  richtig: 
  if (answerButton.textContent == "Hide answer") {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }

  */
});
