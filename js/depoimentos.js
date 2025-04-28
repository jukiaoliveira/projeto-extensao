document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("testimonial-form");
    const display = document.getElementById("testimonials-display");
  
    // Carrega depoimentos salvos
    const savedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
  
    savedTestimonials.forEach(({ name, testimonial }) => {
      display.appendChild(createTestimonialCard(name, testimonial));
    });
  
    // Lida com envio do formulário
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const testimonial = document.getElementById("testimonial").value.trim();
  
      if (!name || !testimonial) return;
  
      const newTestimonial = { name, testimonial };
  
      // Adiciona no DOM
      display.appendChild(createTestimonialCard(name, testimonial));
  
      // Salva no localStorage
      savedTestimonials.push(newTestimonial);
      localStorage.setItem("testimonials", JSON.stringify(savedTestimonials));
  
      form.reset();
    });
  
    // Função para criar elemento de depoimento
    function createTestimonialCard(name, testimonial) {
      const card = document.createElement("div");
      card.classList.add("testimonial-card");
      card.innerHTML = `<p>"${testimonial}"</p><span>- ${name}</span>`;
      return card;
    }
  });
  