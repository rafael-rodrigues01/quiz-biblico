const correctAnswers = ["B", "C", "A", "D"];
const form = document.querySelector("#quiz-form");
const finalResult = document.querySelector(".result");

const showResult = (score) => {
  finalResult.classList.remove("d-none");
  let counter = 0;
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalResult.querySelector("span").textContent = `${counter++}%`;
  }, 15);
};

const handleSubmitForm = (event) => {
  event.preventDefault();

  let score = 0;

  scrollTo(0, 0);

  const inputAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  inputAnswers.forEach((inputAnswer, index) => {
    if (inputAnswer === correctAnswers[index]) {
      score += 25;
    }
  });

  showResult(score);
};

form.addEventListener("submit", handleSubmitForm);
