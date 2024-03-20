
// 5 Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
// * 5, nos debe mostrar el resultado para las demás multiplicaciones.

function tabla(numero) {
  for (let i = 1; i <= 10; i++) {
    if (i != 5) {
      alert(i*numero)
    }
  }
}
let numero = Number(prompt("Ingrese el numero"));
resultado = (tabla(numero))

