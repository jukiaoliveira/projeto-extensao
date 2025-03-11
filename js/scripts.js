document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  // Aplica o modo escuro se estiver ativado no localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  darkModeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
  });

  // Função para alternar exibição das respostas do FAQ
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      if (answer.classList.contains("active")) {
        answer.classList.remove("active");
      } else {
        document.querySelectorAll(".faq-answer").forEach((item) => {
          item.classList.remove("active");
        });
        answer.classList.add("active");
      }
    });
  });

// Função para alternar exibição das respostas do FAQ
document.querySelectorAll(".hist").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    if (answer.classList.contains("active")) {
      answer.classList.remove("active");
    } else {
      document.querySelectorAll(".hist-answer").forEach((item) => {
        item.classList.remove("active");
      });
      answer.classList.add("active");
    }
  });
});
});