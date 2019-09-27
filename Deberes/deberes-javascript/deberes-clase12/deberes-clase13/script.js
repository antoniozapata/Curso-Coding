/*(function(){
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
    const boton = document.querySelector("#button");
    boton.addEventListener("click", function(){
        fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then(response => response.json())
        .then(data => {
          const img = document.querySelector('img');
          img.src = data.message;
          img.alt = 'Un perro';
        });
    });
})();*/


/*Ahora vamos a explorar una nueva API: la API de usuario de GitHub . La URL de esta API es https://api.github.com/users/{username} , donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí está la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer . Si coloca esta URL en una nueva pestaña del navegador, puede ver qué datos devuelve la API. Vamos a crear una página con una entrada de texto y un botón de búsqueda. El usuario ingresará un nombre de usuario de GitHub en la entrada. Prepararemos una función que se ejecutará cuando se presione el botón de búsqueda y que contenga una solicitud a la API para obtener información de ese usuario y mostrarla en nuestra página:

primer nombre
cantidad de repositorios
avatar (imagen)*/

const boton = document.querySelector("#button");
boton.addEventListener("click", function(event){
    event.preventDefault();
    const user = document.querySelector("#user");
    const username = user.value; 

    fetch(`https://api.github.com/users/${user.value}`)
    .then(response => response.json())
    .then(data => {
      const parrafo = document.querySelector('#parrafo');
      parrafo.innerHTML = data.name;
    })
    .catch(x => console.log(x));
    ;
});






