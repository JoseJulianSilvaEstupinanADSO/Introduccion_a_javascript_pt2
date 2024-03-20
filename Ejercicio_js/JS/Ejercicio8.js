// 8 Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido.

let regex = /^(\d){4,6}$/
let ping = Number(prompt("Ingrese el ping"))

function validar(ping) {
  if (regex.test(ping)) {
    return "El ping sirve"
  }
  else {
    return "El ping no sirve"
  }
}
alert(validar(ping));

