// Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

// cid es un arreglo 2D que enumera las monedas disponibles.

// La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

// Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

// Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

// En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

// Unidad Monetaria	Importe
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// A continuación, un ejemplo del efectivo en caja en formato de arreglo:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = cash - price;
  let change = [];
  let totalCash = 0;

  for (let [currency, amount] of cid) {
    totalCash += amount;
  }

  if (totalCash < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCash === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    const currency = cid[i][0];
    let amount = cid[i][1];
    const unit = currencyUnit[currency];
    let count = 0;

    while (changeDue >= unit && amount > 0) {
      changeDue -= unit;
      amount -= unit;
      changeDue = Math.round(changeDue * 100) / 100;
      count++;
    }

    if (count > 0) {
      change.push([currency, count * unit]);
    }
  }
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
