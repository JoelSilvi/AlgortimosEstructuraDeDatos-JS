// Conversor de números romanos
// Convierte el número proporcionado en un número romano.

// Números romanos	Números arábigos
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.

function convertToRoman(num) {
  if (typeof num !== "number" || num < 1 || num > 3999) {
    throw new Error("El número debe ser un entero entre 1 y 3999");
  }
  const valoresRomanos = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let resultado = "";

  for (let numeral in valoresRomanos) {
    while (num >= valoresRomanos[numeral]) {
      resultado += numeral;
      num -= valoresRomanos[numeral];
    }
  }

  return resultado;
}

document.write(convertToRoman(36));
