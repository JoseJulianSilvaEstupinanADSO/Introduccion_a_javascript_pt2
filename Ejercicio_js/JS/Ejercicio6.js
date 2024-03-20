// 6 Crea una función de nos devuelva el elemento mayor de un arreglo de números.

const numeros = {}
let mayor = 0, cant;

function arreglo(cant) {
  for (let i = 0; i < cant; i++) {
    numeros[i] = Math.ceil(Math.random() * 1000);
    if (mayor < numeros[i]) {
      mayor = numeros[i]
    }
  };
  console.log(numeros)
  return mayor
}
cant = Number(prompt("Ingrese la cantidad de numeros"));
alert(arreglo(cant));
