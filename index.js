const d = document;
const textArea = d.querySelector(".form-text");
const btnEncriptar = d.querySelector(".btn-encriptar");
const btnDesencriptar = d.querySelector(".btn-desencriptar");
const muneco = d.querySelector(".muneco");
const resultado = d.querySelector(".resultado-titulo");
const copiar = d.querySelector(".btn-copiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
copiar.onclick = copiarTexto;


function encriptar() {
  ocultarAdelante();
  const textoEncriptado = encriptarTexto(textArea.value);
  resultado.innerHTML = ` <p class="texto">${textoEncriptado}</p>`;
  textArea.value = "";
  copiar.style.display = "block"; 
}

function desencriptar() {
  ocultarAdelante();
  const textoEncriptado = desencriptarTexto(textArea.value);
  resultado.innerHTML = ` <p class="texto">${textoEncriptado}</p>`;
  textArea.value = "";
  copiar.style.display = "block"; 
}

function copiarTexto() {
  let contenido = document.querySelector(".texto").textContent;
  navigator.clipboard.writeText(contenido);
  console.log("texto copiado");
}

function encriptarTexto(mensaje) {
  var textoFinal = mensaje.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');  

  return textoFinal;
}

function desencriptarTexto(mensaje) { 
  var textoFinal = mensaje.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  return textoFinal;
}

function ocultarAdelante() {
  muneco.classList.add("ocultar");
}

// const encrypt = (text) => {
//   return text
//       .replace(/e/g, 'enter')
//       .replace(/i/g, 'imes')
//       .replace(/a/g, 'ai')
//       .replace(/o/g, 'ober')
//       .replace(/u/g, 'ufat');
// };

// const decrypt = (text) => {
//   return text
//       .replace(/enter/g, 'e')
//       .replace(/imes/g, 'i')
//       .replace(/ai/g, 'a')
//       .replace(/ober/g, 'o')
//       .replace(/ufat/g, 'u');
// };