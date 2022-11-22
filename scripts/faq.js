const questionGroups = document.querySelectorAll(".question-group__question");

questionGroups.forEach((questionGroup) => {
  questionGroup.addEventListener("click", () => {
    questionGroup.parentElement.dataset.open =
      questionGroup.parentElement.dataset.open === "true" ? "false" : "true";
  });
});
