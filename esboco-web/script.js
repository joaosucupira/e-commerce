
// Texto a ser digitado
const text = "Hardware, software e muito mais.";


function typeWriter(text, i, typingElement) {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(text, i, typingElement);
    }, 100); // Intervalo de 100ms entre cada letra
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const typingElement = document.getElementById("typing-text");
  typeWriter(text, 0, typingElement);
});
