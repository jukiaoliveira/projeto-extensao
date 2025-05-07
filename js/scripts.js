document.addEventListener("DOMContentLoaded", function () {
  //  Modo Escuro
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
  darkModeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
  });
  //  FAQ - perguntas frequentes
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
  //  Histórias - botão de alternar
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
  //  Modal "Ler mais"
  const modal = document.getElementById("modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");
  const content = document.querySelector(".content");
 
  const postContents = {
    "Identificando": `Identificar o autismo logo nos primeiros anos de vida é fundamental...`,
    "Entendendo o Autismo": "Aqui explicamos o que é o Transtorno do Espectro Autista...",
    "O Papel da Família": "A família é uma base fundamental. Veja formas práticas...",
    "Quando Tudo Parece Difícil": "Você não está sozinho. Veja como lidar com os desafios..."
  };
 
  // Certifique-se de que o modal começa fechado, sem a classe 'show'
  modal.classList.remove("show");
  modalOverlay.style.display = "none";
  content.classList.remove("blurred");
 
  document.querySelectorAll(".read-more").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
 
      const key = btn.dataset.key;
      const contentText = postContents[key];
 
      modalTitle.innerText = key;
      modalText.innerText = contentText || "Conteúdo não encontrado.";
 
      modal.classList.add("show"); // Exibe o modal após o clique
      modalOverlay.style.display = "block";
      content.classList.add("blurred");
    });
    
  });
 
  // Fechar o modal
  function closeModal() {
    modal.classList.remove("show");
    modalOverlay.style.display = "none";
    content.classList.remove("blurred");
  }
 
  closeBtn.addEventListener("click", closeModal);
 
  window.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
});