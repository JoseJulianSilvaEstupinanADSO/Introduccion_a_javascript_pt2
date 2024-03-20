// 10 Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

function positivos(suma,cant) {
    for (let i = 0; i < cant; i++) {
        let numero = Number(prompt("Ingrese en numero"));
        if(numero > 0){
            suma += numero;
        }
    }
    return "la suma de los numeros es "+ suma
}

let cant,suma = 0;
cant = Number(prompt("Cuantos numeros desea sumar"))
alert(positivos(suma,cant))

