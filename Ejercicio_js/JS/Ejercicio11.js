// 11 Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena

function binario(numero) {
    let num = [];
    for (let i = 0; true; i++) {
        if (numero % 2 == 0) {
            num.push(0);
            numero = Math.trunc(numero/2);
        }
        else{
            num.push(1);
            numero = Math.trunc(numero/2);
        };
        if(numero === 1){
            num.push(1);
            break
        }
    }
    return num.reverse().join('')
}

let num1, num2;
num1 = Number(prompt("Ingrese el numero 1"));
num2 = Number(prompt("Ingrese el numero 2"));
let numero =num1 + num2;
alert(binario(numero));
