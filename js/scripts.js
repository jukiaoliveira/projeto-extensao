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
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");

  const postContents = {
    "Identificando": `Identificar o autismo logo nos primeiros anos de vida é fundamental para garantir o apoio e os estímulos adequados ao desenvolvimento da criança. O Transtorno do Espectro Autista (TEA) se manifesta de formas diferentes em cada pessoa, mas alguns sinais podem ser observados com atenção no comportamento diário.

    Entre os principais sinais estão:
    - Dificuldade na comunicação verbal e não verbal, como atrasos na fala, pouco uso de gestos ou ausência de respostas ao ser chamado pelo nome;
    - Pouco contato visual ou expressões faciais que não acompanham as interações;
    - Comportamentos repetitivos, como alinhar objetos, balançar o corpo, girar brinquedos de forma repetitiva;
    - Interesses restritos, onde a criança pode focar excessivamente em um tema ou objeto específico;
    - Dificuldade em interações sociais, como não brincar com outras crianças, preferir brincar sozinha ou não demonstrar interesse em compartilhar experiências.
    
    Esses sinais costumam aparecer antes dos 3 anos, mas em alguns casos só são percebidos mais tarde. É importante lembrar que a presença de um ou dois desses comportamentos não significa automaticamente que a criança está no espectro autista. Por isso, a melhor atitude é procurar um especialista (como um neuropediatra ou psicólogo infantil) para uma avaliação completa.
    
    O diagnóstico precoce pode fazer toda a diferença no desenvolvimento da criança, permitindo o acesso a terapias e recursos que melhoram a qualidade de vida e a autonomia.`,
      "Entendendo o Autismo": "Aqui explicamos o que é o Transtorno do Espectro Autista, seus níveis, e como ele se manifesta em diferentes pessoas.",
      "O Papel da Família": "A família é uma base fundamental. Veja formas práticas de acolher e conviver com amor e empatia.",
      "Quando Tudo Parece Difícil": "Você não está sozinho. Veja como lidar com os desafios emocionais e buscar redes de apoio confiáveis.",
      "Entendendo o Autismo": "Aqui explicamos o que é o Transtorno do Espectro Autista, seus níveis, e como ele se manifesta em diferentes pessoas.",
      "O Papel da Família": "A família é uma base fundamental. Veja formas práticas de acolher e conviver com amor e empatia.",
      "Quando Tudo Parece Difícil": "Você não está sozinho. Veja como lidar com os desafios emocionais e buscar redes de apoio confiáveis."
  };

  document.querySelectorAll(".read-more").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const key = btn.dataset.key; 
      const content = postContents[key];

      modalTitle.innerText = key;
      modalText.innerText = content || "Conteúdo não encontrado.";
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

});
