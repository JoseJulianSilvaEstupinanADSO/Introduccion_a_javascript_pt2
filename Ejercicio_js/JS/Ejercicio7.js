// 7 Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

let palabra = prompt("Ingrese la palabra")
function revertir(palabra) {
  return palabra.split('').reverse().join('')
};
alert(revertir(palabra));
