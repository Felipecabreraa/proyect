// Requerimiento 1: Agregar y quitar borde en la imagen
const image = document.getElementById("image");
let hasBorder = false;

image.addEventListener("click", function () {
  if (hasBorder) {
    image.style.border = "none";  // Quitamos el borde
  } else {
    image.style.border = "2px solid red";  // Agregamos el borde
  }
  hasBorder = !hasBorder;  // Cambiamos el estado
});

// Requerimiento 2: Pedir stickers
const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");
const sticker3 = document.getElementById("sticker3");
const totalP = document.getElementById("total");

function updateTotal() {
  const total = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);

  if (total <= 10) {
    totalP.textContent = `Llevas ${total} stickers`;
  } else {
    totalP.textContent = "Llevas demasiados stickers";
  }
}

sticker1.addEventListener("input", updateTotal);
sticker2.addEventListener("input", updateTotal);
sticker3.addEventListener("input", updateTotal);

// Requerimiento 3: Verificación de contraseña
const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const submitButton = document.getElementById("submit");
const passwordResult = document.getElementById("passwordResult");

submitButton.addEventListener("click", function () {
  const password = digit1.value + digit2.value + digit3.value;

  if (password === "911") {
    passwordResult.textContent = "Password 1 correcto";
  } else if (password === "714") {
    passwordResult.textContent = "Password 2 correcto";
  } else {
    passwordResult.textContent = "Password incorrecto";
  }
});
