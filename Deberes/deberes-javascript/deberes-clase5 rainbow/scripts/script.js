const divRed = document.createElement("div");
const contenedor = document.getElementsByClassName("my-container")[0];
contenedor.appendChild(divRed);

divRed.style.backgroundColor = "red";

const divOrange = document.createElement("div");
contenedor.appendChild(divOrange);

divOrange.style.backgroundColor = ("orange");

const divYellow = document.createElement("div");
contenedor.appendChild(divYellow);

divYellow.style.backgroundColor = ("yellow");

const divGreen = document.createElement("div");
contenedor.appendChild(divGreen);

divGreen.style.backgroundColor = ("green");

const divBlue = document.createElement("div");
contenedor.appendChild(divBlue);

divBlue.style.backgroundColor = ("blue");

const divPurple = document.createElement("div");
contenedor.appendChild(divPurple);

divPurple.style.backgroundColor = ("purple");

const divs = [divRed, divOrange, divYellow, divGreen, divBlue, divPurple];

divs.forEach((div) => {
    div.style.width = "400px";
    div.style.height = "40px";
});

<<<<<<< HEAD
=======
let = 0
setInterval(() => {
    if (i < divs.length) {
        i++
        divs[i].classList.toggle("visible")
    } else {
        i = 0
    }
}, 200)
>>>>>>> 54ca375a636a4824a0ea161f315df87f676c88e3
