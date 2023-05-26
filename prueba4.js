function bloquear(mensaje, modo) {
    let patron = /^[a-z\s]+$/;
  
    if (!patron.test(mensaje)) {
      alert("El texto contiene caracteres no permitidos. (Ingresa solo letras minúsculas y sin acentos).");
      return false;
    }
  
    let textarea = document.getElementById("mensaje");
    let mensajeIngresado = textarea.value;
    document.getElementById("hiddenn").style.display = "none";
  
    if (modo === "encriptar") {
      mensajeIngresado = mensajeIngresado.replace(/[eiaou]/g, function(match) {
        if (match === 'e') {
          return 'enter';
        } else if (match === 'i') {
          return 'imes';
        } else if (match === 'a') {
          return 'ai';
        } else if (match === 'o') {
          return 'ober';
        } else if (match === 'u') {
          return 'ufat';
        }
      });
    } else if (modo === "desencriptar") {
      mensajeIngresado = mensajeIngresado.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        if (match === 'enter') {
          return 'e';
        } else if (match === 'imes') {
          return 'i';
        } else if (match === 'ai') {
          return 'a';
        } else if (match === 'ober') {
          return 'o';
        } else if (match === 'ufat') {
          return 'u';
        }
      });
    }
  
    let textoOut = document.getElementById("textoOut");
    textoOut.textContent = mensajeIngresado;
    let textop = document.getElementById("textoOut");
    textop.style.display = "block";
    let elemento = document.getElementById("botonCopiar");
    elemento.style.display = "block";
  
    return true;
  }
  
  function copiarTexto() {
    let textoOut = document.getElementById("textoOut");
    let button = document.getElementById("botonCopiar");
  
    navigator.clipboard.writeText(textoOut.textContent);
    button.textContent = "Copiado";
    setTimeout(function() {
      button.textContent = "Copiar";
    }, 4000);
  }
  