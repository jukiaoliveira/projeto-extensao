document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close-btn");
  const closeButton = document.querySelector(".close-button");
  const content = document.querySelector(".content");

  const postContents = {
    "Identificando": `Identificar o autismo logo nos primeiros anos de vida é fundamental para garantir intervenções precoces. Alguns sinais podem incluir: pouco contato visual, atraso na fala ou linguagem, comportamentos repetitivos, dificuldade com mudanças na rotina e reações incomuns a estímulos sensoriais.`,
    "Entendendo o Autismo": "O Transtorno do Espectro Autista (TEA) é uma condição de neurodesenvolvimento que afeta a forma como a pessoa percebe e interage com o mundo. Não existe apenas um tipo de autismo, mas sim um amplo espectro de características e necessidades. Cada pessoa com autismo é única, com seus próprios pontos fortes e desafios.",
    "O Papel da Família": "A família é uma base fundamental no desenvolvimento e apoio à pessoa com autismo. Seu envolvimento é crucial para o progresso nas terapias e para a construção de um ambiente favorável. É importante que todos os membros da família compreendam o TEA e participem do processo de aprendizado e adaptação.",
    "Quando Tudo Parece Difícil": "Você não está sozinho. Muitas famílias enfrentam desafios semelhantes e existem comunidades de apoio, grupos e profissionais disponíveis para ajudar. É importante cuidar também da sua própria saúde mental e bem-estar. Busque suporte, permita-se momentos de descanso e celebre as pequenas conquistas."
  };

  document.querySelectorAll(".read-more").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const key = btn.dataset.key;
      const contentText = postContents[key];

      // Preencher conteúdo do modal
      modal.querySelector("#modal-title").innerText = key;
      modal.querySelector("#modal-text").innerText = contentText || "Conteúdo não encontrado.";

      // Mostrar o modal e o overlay
      modal.classList.add("show");
      modalOverlay.classList.add("show");

      // Adicionar efeito de desfoque ao conteúdo
      content.classList.add("blurred");
    });
  });

  // Fechar o modal com o botão X
  closeBtn.addEventListener("click", function () {
    closeModal();
  });

  // Fechar o modal com o botão "Fechar"
  closeButton.addEventListener("click", function () {
    closeModal();
  });

  // Fechar o modal ao clicar no overlay
  modalOverlay.addEventListener("click", function () {
    closeModal();
  });

  // Fechar o modal com a tecla ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // Função para fechar o modal
  function closeModal() {
    modal.classList.remove("show");
    modalOverlay.classList.remove("show");
    content.classList.remove("blurred");
  }
});