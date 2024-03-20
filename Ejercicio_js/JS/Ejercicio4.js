// 4 Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

function contarSilabas(palabra) {
  // Array de vocales
  const vocales = ['a', 'e', 'i', 'o', 'u'];

  // Inicializar el contador de sílabas en 0
  let silabas = 0;

  // Inicializar la variable que indica si se encuentra en una vocal en falso
  let enVocal = false;


  // Iterar sobre cada letra de la palabra
  for (let i = 0; i < palabra.length; i++) {
    // Obtener la letra actual en minúsculas
    const letra = palabra[i].toLowerCase();

    // Si la letra actual es una vocal
    if (vocales.includes(letra)) {
      // Si no se encontraba en una vocal anteriormente, incrementar el contador de sílabas
      if (enVocal === false) {
        silabas++;
      }
      // Marcar que se encuentra en una vocal
      enVocal = true;
    } else {
      // Si la letra actual no es una vocal, reiniciar el estado de la variable enVocal
      enVocal = false;
    }
  }
  // Devolver el contador de sílabas
  return silabas;
}
let palabra = prompt("Ingrese la palabra");
alert(contarSilabas(palabra));
