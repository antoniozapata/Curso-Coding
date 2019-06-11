/* Mediante el uso de indicadores, variables y condicionales , haga preguntas a los usuarios y muestre el resultado en la consola.

Pregunte: "Los tomates son frutas, no vegetales: verdaderos o falsos". Si esa respuesta es "verdadera", se muestra "correcta", de lo contrario se muestra "incorrecta".
Pregunte: "Debes beber 8 vasos de agua: verdadero o falso". Si esa respuesta es "falsa", se muestra "correcta", de lo contrario se muestra "incorrecta".
Pregunte: "Los peces solo tienen tres segundos de memoria: verdadero o falso". Si esa respuesta es "falsa", se muestra "correcta", de lo contrario se muestra "incorrecta".
Pregunte: "La Gran Muralla China es la única estructura hecha por el hombre visible desde el espacio La Gran Muralla China: verdadero o falso". Si esa respuesta es "verdadera", se muestra "correcta", de lo contrario se muestra "incorrecta".
Crea más preguntas verdaderas o falsas. */

const ISTOMATOS = prompt("Tomatos are fruits, not vegetables: true or false?");
if (ISTOMATOS === true) {
  console.log('correcto');
} else {
  console.log('incorrecto');
}

const DRINK8GLASSES = prompt("You should drink 8 glasses of water: true or false?");

if (DRINK8GLASSES === true) {
  console.log('correcto');
} else {
  console.log('incorrecto');
}

const SECONDSOFMEMORY = prompt("Fishes have only three seconds of memory: true or false?");

if (SECONDSOFMEMORY === true) {
  console.log('correcto');
} else {
  console.log('incorrecto');
}

const GREATWALL = prompt("The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false?");

if (GREATWALL === true) {
  console.log('correcto');
} else {
  console.log('incorrecto');
}