const form = document.querySelector("#quiz-form");
const finalScoreContainer = document.querySelector(".final-score-container");

const correctAnswers = ["B", "C", "A", "D"];

let score = 0;

const getUserAnswers = () =>
  correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value);

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index];

    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
};

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  finalScoreContainer.classList.remove("d-none");
};

const animatedUserScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalScoreContainer.querySelector("span").textContent = `${counter++}%`;
  }, 15);
};

const resetUserScore = () => {
  score = 0;
};

const handleSubmitForm = (event) => {
  event.preventDefault();

  const userAnswers = getUserAnswers();

  resetUserScore();
  calculateUserScore(userAnswers);
  showFinalScore();
  animatedUserScore();
};

form.addEventListener("submit", handleSubmitForm);
