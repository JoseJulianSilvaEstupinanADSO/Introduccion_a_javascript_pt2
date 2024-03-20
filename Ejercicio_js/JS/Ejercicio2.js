// 2 Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar

function par(numero) {
  if (numero % 2 == 0) {
    return "El numero es par"
  }
  else {
    return "El numero es impar"
  }
};
let numero = Number(prompt("Ingrese el numero"));
alert(par(numero));


