
// Texto a ser digitado
const text = "Qualidade, variedade e frete grátis.";

// Função para adicionar letra por letra ao elemento HTML
function typeWriter(text, i, typingElement) {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(text, i, typingElement);
    }, 100); // Intervalo de 100ms entre cada letra
  }
}

// Chamada da função ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  const typingElement = document.getElementById("typing-text");
  typeWriter(text, 0, typingElement);
});
