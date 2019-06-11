/* Ejercicio 1 - La calculadora de suministro de por vida
¿Cuántas papas comerá una persona hasta el final de su vida? ¡Descubrete!

Almacena la edad actual de las personas en una variable.
Almacena una edad máxima estimada en una variable.
Almacene una cantidad estimada por semana (como un número).
Calcule cuántas semanas pasarán hasta el final de la vida de esta persona.
Calcule cuántas papas se comerían en total durante el resto de su vida.
Envíe el resultado a la pantalla mediante una consola como la siguiente: "NAME tiene NN años y se comerán NN papas hasta la edad de X". */

let name = "Antonio";
let age = 34;
let maxAge = 90;
let numPerWeek = 7;
const weeksPerYear = 52
let weeksForLife = (maxAge - age) * (weeksPerYear)
let totalNeeded = numPerWeek * weeksForLife;
let message = name + " tiene " + age + " años y se comera " + totalNeeded + " papas hasta la edad de " + maxAge
console.log(message);
