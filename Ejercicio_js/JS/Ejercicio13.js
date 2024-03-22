// 13 Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

function inverso(cant) {
    const numeros = []
    for (let i = 0; i < cant; i++) {
        let numero = Number(prompt("Ingrese un numero"));
        numeros.push(numero*(-1));
    }
    return numeros;
}

let cant = Number(prompt("De cuanto sera el conjunto de numeros"))

alert(inverso(cant))