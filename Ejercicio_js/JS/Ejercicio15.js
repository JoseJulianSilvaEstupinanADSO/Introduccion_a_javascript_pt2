// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function numeros(numero) {
    const textual = ["cero","uno","dos","tres","cuatro","cinco"];
    for (let i = 0; i < 6; i++) {
        if (i == numero) {
            return textual[i]
            break
        }
    }
    throw Error
}

try {
    let numero = Number(prompt("Ingrese un numero de 0 a 5"));
    alert(numeros(numero))
    
} catch (error) {
    alert("Solo numeros de 0 a 5")
}