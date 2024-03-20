// 12 Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

function eliminar(palabra) {
    const  regex = /[aeiou]/gi
    return palabra.replace(regex, '')
}

let palabra = prompt("Ingrese la palabra")
alert(eliminar(palabra))
