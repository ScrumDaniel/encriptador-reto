const inputTexto = document.getElementById("texto-entrada");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const inputResultado = document.getElementById("mensaje");
const btnCopiar = document.getElementById("btn-copiar");
const soloLetras = "^[a-z !ñ]+$";

document.addEventListener("DOMContentLoaded", () => {
  btnEncriptar.addEventListener("click", encriptarTexto);
  btnDesencriptar.addEventListener("click", desencriptarTexto);
  btnCopiar.addEventListener("click", copiarTexto);
  document.getElementById("texto-entrada").value="";
  document.getElementById("mensaje").value="";
});

function encriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = "";
  let texto = inputTexto.value;
  

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(" ");
    
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll("e", "enter");
      palabra = palabra.replaceAll("i", "imes");
      palabra = palabra.replaceAll("a", "ai");
      palabra = palabra.replaceAll("o", "ober");
      palabra = palabra.replaceAll("u", "ufat");

      nuevasPalabras.push(palabra);
      
    }

    const resultado = nuevasPalabras.join(" ");

    inputResultado.value = resultado;
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("msj-noencontrado").style.display = "none";
    document.getElementById("msj-noencontrado-p").style.display = "none";
  } else if (texto == "") {
    document.getElementById("muñeco").style.display = "initial";
    document.getElementById("msj-noencontrado").style.display = "initial";
    document.getElementById("msj-noencontrado-p").style.display = "initial";
  } else {
    alert("Solo se permiten letras minúsculas, sin acentos");
    return;
  }
}

function desencriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = "";
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(" ");
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll("enter", "e");
      palabra = palabra.replaceAll("imes", "i");
      palabra = palabra.replaceAll("ai", "a");
      palabra = palabra.replaceAll("ober", "o");
      palabra = palabra.replaceAll("ufat", "u");
      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(" ");

    inputResultado.value = resultado;
    
  } else {
    mostrarError("Solo se permiten letras minúsculas, sin acentos");
    return;
  }
}

function copiarTexto(e) {
  e.preventDefault();
  const mensaje = inputResultado.value;
  navigator.clipboard.writeText(mensaje);
}
