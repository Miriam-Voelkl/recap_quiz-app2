// form submit
const form = document.querySelector('[data-js="form"]');

console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);

  const newQuestion = document.createElement("div");
  newQuestion.classList.add("card-list__item");
  form.append(newQuestion);
  newQuestion.innerHTML = `
          <article class="card">
            <h2 class="card__question">${data.question_textarea}
            </h2>
            <p class="card__answer card__answer--active" data-js="card-answer">${data.answer_textarea}</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">${data.tags_input}</li>
            </ul>
          </article>
  `;
  event.target.reset();
  event.target.elements.question_textarea.focus();
});
