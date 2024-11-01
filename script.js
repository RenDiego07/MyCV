const nameElement = document.getElementById("text");
const roleElement = document.getElementById("role");

const nameText = "DIEGO FLORES RENGIFO";
const roleText = "software developer";

function typeText(element, text, widthValue) {
  // Coloca el texto en el elemento y aplica la animación
  element.textContent = text;
  element.style.setProperty('--characters', text.length);
  
  // Ajusta el ancho del contenedor basado en el número de caracteres
  element.style.width = widthValue + 'ch';
}

// Empieza por escribir el nombre
function showName() {
  nameElement.style.animation = 'typing 3s steps(30, end) forwards, fadeIn 3s ease forwards, blink 0.75s step-end infinite';
  typeText(nameElement, nameText, 22); // "DIEGO FLORES RENGIFO" tiene 22 caracteres
}

// Luego, tras un retraso, escribe el rol
function showRole() {
  roleElement.style.animation = 'typingRole 3s steps(19, end) forwards, fadeIn 3s ease forwards, blink 0.75s step-end infinite';
  typeText(roleElement, roleText, 19); // "software developer" tiene 19 caracteres
}

// Ejecuta el nombre primero y el rol después de un retraso
setTimeout(showName, 500); // El nombre comienza con un retraso de 500ms
setTimeout(showRole, 4000); // El rol comienza después de 4 segundos (una vez que el nombre termina)
