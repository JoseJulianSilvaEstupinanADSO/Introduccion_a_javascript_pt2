
// 3 • Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres).

let palabra, cant;
function longitud(palabra) {
  cant = palabra.length;
  if (cant < 5) {
    return "La palabra es corta"
  }
  else {
    return "La palabra es larga"
  }
}
palabra = prompt("Ingrese la palabra");
alert(longitud(palabra));


