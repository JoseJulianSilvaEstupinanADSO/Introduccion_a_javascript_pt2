// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este numero es par o impar.

function numeros() {
    let numero = Math.ceil(Math.random() * 10);
    if(numero % 2 == 0){
        return "el numero " +numero+ " es par";
    }
    else{
        return "el numero " +numero+ " es impar";
    }
}

alert(numeros());