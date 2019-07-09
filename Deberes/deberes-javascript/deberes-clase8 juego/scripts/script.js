


// Creamos una funcion que nos devuelve un número entre cero y el maximo
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const randomNumber = getRandomInt(100)
console.log(randomNumber)
