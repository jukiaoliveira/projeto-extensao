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

  //  FAQ
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      document.querySelectorAll(".faq-answer").forEach((item) => item.classList.remove("active"));
      answer.classList.toggle("active");
    });
  });

  //  Histórias
  document.querySelectorAll(".hist").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      document.querySelectorAll(".hist-answer").forEach((item) => item.classList.remove("active"));
      answer.classList.toggle("active");
    });
  });

  // Modal
  const modal = document.getElementById("modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");
  const closeButton = document.querySelector(".close-button"); // botão "Fechar"
  const contentWrapper = document.querySelector(".content");

  const postContents = {
    "Identificando":  `
    O autismo (TEA) é uma condição de neurodesenvolvimento que afeta a interação e percepção do mundo. Identificar sinais precocemente é crucial para garantir o suporte adequado.

    Sinais de Alerta:
    1. Atraso na fala ou compreensão.
    2. Evitar ou ter dificuldade com contato visual.
    3. Comportamentos repetitivos, como alinhar objetos.
    4. Focar excessivamente em um interesse específico.
    5. Dificuldade em interagir socialmente ou brincar com outras crianças.
    6. Reações incomuns a estímulos sensoriais (som, luzes, texturas).

    Se notar esses sinais, procure orientação profissional. O diagnóstico precoce é fundamental para um desenvolvimento mais eficaz.
  `,
    "Entendendo o Autismo": `
    O Transtorno do Espectro Autista (TEA) é uma condição de desenvolvimento neurológico que afeta como a pessoa percebe o mundo e interage com os outros. Ele se manifesta de diferentes maneiras e em diversos níveis de intensidade, o que torna o autismo um "espectro". 

    As pessoas com autismo podem apresentar dificuldades em áreas como comunicação, interação social e comportamentos repetitivos. No entanto, cada pessoa com TEA tem suas próprias habilidades e desafios, e pode exibir características que vão desde leves até mais intensas.

    O diagnóstico de autismo envolve uma avaliação feita por profissionais especializados, que observam o comportamento e o desenvolvimento da criança, normalmente antes dos 3 anos. Quanto mais cedo o diagnóstico, maiores as chances de sucesso com intervenções, como terapias comportamentais, que ajudam no desenvolvimento de habilidades sociais, cognitivas e de comunicação.

    As causas do autismo ainda não são completamente compreendidas, mas sabe-se que fatores genéticos desempenham um papel importante. Além disso, influências ambientais também podem contribuir para o desenvolvimento do TEA, embora não existam causas únicas ou específicas para a condição.
  `,
    "O Papel da Família": `
    A família é a base fundamental para o apoio e desenvolvimento de uma pessoa com autismo. Ela desempenha um papel essencial em cada etapa do processo, desde o diagnóstico até a implementação de estratégias terapêuticas e sociais. A presença constante da família é crucial para garantir um ambiente seguro, acolhedor e estimulante, onde a pessoa com autismo pode crescer e aprender.

    O envolvimento da família não se limita apenas ao acompanhamento das terapias, mas também à adaptação do ambiente doméstico e à criação de rotinas que atendam às necessidades específicas do indivíduo. Compreender as peculiaridades do autismo ajuda a família a lidar melhor com os desafios do dia a dia e a implementar técnicas que favoreçam o aprendizado e o desenvolvimento social.

    A paciência, o amor e a empatia são fundamentais para o progresso da pessoa com TEA. Muitas vezes, os familiares precisam de orientação especializada para entender como se comunicar de forma eficaz, como lidar com comportamentos desafiadores e como ajudar a pessoa a se integrar melhor à sociedade. O apoio emocional e psicológico também é necessário, tanto para o indivíduo com autismo quanto para os membros da família.

    Além disso, é importante que a família busque redes de apoio, como grupos de suporte, que proporcionam um espaço para compartilhar experiências e aprender com outros que passam por situações semelhantes. O autocuidado da família é igualmente relevante, pois é preciso que os familiares estejam bem emocionalmente para poderem oferecer o suporte necessário.

    Em resumo, o papel da família vai além de cuidar – é um papel ativo, de apoio constante, empatia e paciência. Ela é a primeira e mais importante fonte de apoio, e sua participação no processo terapêutico pode fazer toda a diferença na qualidade de vida da pessoa com autismo.
  `,
    "Quando Tudo Parece Difícil": "Você não está sozinho. Veja como lidar com os desafios emocionais e buscar redes de apoio confiáveis."
  };

  // Garante que o modal inicie fechado
  modal.classList.remove("show");
  modalOverlay.style.display = "none";
  contentWrapper.classList.remove("blurred");

  // Botões "Ler mais"
  document.querySelectorAll(".read-more").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const key = btn.dataset.key;
      const contentText = postContents[key];
  
      modalTitle.innerText = key;
      modalText.innerText = contentText || "Conteúdo não encontrado.";
      modal.classList.add("show");
      modalOverlay.style.display = "block";
      content.classList.add("blurred");
    });
  });
  

  // Função para fechar o modal
  function closeModal() {
    modal.classList.remove("show");
    modalOverlay.style.display = "none";
    contentWrapper.classList.remove("blurred");
  }

  closeButton.addEventListener("click", closeModal);

  window.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});
