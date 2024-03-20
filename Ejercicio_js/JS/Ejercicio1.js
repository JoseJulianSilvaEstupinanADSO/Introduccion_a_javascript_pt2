//1  Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

let num1, num2;
num1 = Number(prompt("Ingrese el numero 1"));
num2 = Number(prompt("Ingrese el numero 2"))
function mayor(num1, num2){
  if (num1 > num2) {
    return "el numero 1 es mayor"
  }
  else {
    if(num1 < num2){
      return "el numero 2 es mayor"
    }
    else {
      return "los numeros son iguales"
    }
  }
}
alert(mayor(num1, num2));

