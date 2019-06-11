const preguntaEdad = "¿Cuantos años tienes?";
const edad = prompt(preguntaEdad)

// 0-18, 19-35, 36-65, 65+

if (edad > 0 && edad <= 18) {
    console.log(edad);
    alert ("¡Eres joven!");
} else if (edad <= 35) {
    console.log(edad);
} else if (edad <= 65) {
    console.log(edad);
} else {
    console.log(edad);
}