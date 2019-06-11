/* Necesito preguntar al usuario el nombre  la edad de cada estudiante, 
luego lanzar un mensaje con los datos resultantes de cada uno */

var nombredevictoria = prompt("¿Cual es tu nombre");
var edaddevictoria = prompt("¿Cual es tu edad?");
var nombredeantonio = prompt("¿Cual es tu nombre");
var edaddeantonio = prompt("¿Cual es tu edad?");
var nombredetexy = prompt("¿Cual es tu nombre");
var edaddetexy = prompt("¿Cual es tu edad?");
var nombredeharving = prompt("¿Cual es tu nombre");
var edaddeharving = prompt("¿Cual es tu edad?");
var nombredeibrahima = prompt("¿Cual es tu nombre");
var edaddeibrahima = prompt("¿Cual es tu edad?");
alert(nombredevictoria + " tiene " + edaddevictoria + " años, " + nombredeantonio + " tiene " + edaddeantonio + " años, " + nombredetexy + " tiene " + edaddetexy + " años, " + nombredeharving + " tiene " + edaddeharving + " años, " + nombredeibrahima + " tiene " + edaddeibrahima + " años")


/* Mediante el uso de indicadores, variables y condicionales , haga preguntas a los usuarios y muestre el resultado en la consola.

Pregunte: "Los tomates son frutas, no vegetales: verdaderos o falsos". Si esa respuesta es "verdadera", se muestra "correcta", de lo contrario se muestra "incorrecta".
Pregunte: "Debes beber 8 vasos de agua: verdadero o falso". Si esa respuesta es "falsa", se muestra "correcta", de lo contrario se muestra "incorrecta".
Pregunte: "Los peces solo tienen tres segundos de memoria: verdadero o falso". Si esa respuesta es "falsa", se muestra "correcta", de lo contrario se muestra "incorrecta".
Pregunte: "La Gran Muralla China es la única estructura hecha por el hombre visible desde el espacio La Gran Muralla China: verdadero o falso". Si esa respuesta es "verdadera", se muestra "correcta", de lo contrario se muestra "incorrecta".
Crea más preguntas verdaderas o falsas. */

let isTomatos = prompt("Los tomates son frutas, no vegetales. true or false?")
if (isTomatos ===  true ) {
   console.log ( ' ¡Es correcta! ' );
 } else {
    consola.log ( ' ¡Incorrecta! ' );
 }
}
