// Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

// Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

// Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

// Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.

function rot13(str) {
  let resultado = "";

  for (let i = 0; i < str.length; i++) {
    const caracter = str[i];

    if (esLetraMayuscula(caracter)) {
      let codigoASCII = str.charCodeAt(i);
      codigoASCII = ((codigoASCII - 65 + 13) % 26) + 65;
      resultado += String.fromCharCode(codigoASCII);
    } else {
      resultado += caracter;
    }
  }

  return resultado;
}

function esLetraMayuscula(caracter) {
  return /^[A-Z]$/.test(caracter);
}

document.write(rot13("SERR PBQR PNZC"));
