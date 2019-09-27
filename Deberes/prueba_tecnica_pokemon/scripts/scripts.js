const monstersList = document.getElementById('monsters-list');
let searchResult = document.getElementById('monsters-search-bar');

function pokeApiCall () {
    fetch ('https://pokeapi.co/api/v2/pokemon/?offset=25&limit=25')
    .then (response => {
        if (!response.ok) {
            throw Error(`Se ha presentado el error ${response.status}`)
        }
        return response.json();
    })
    .then (createPokeList => {
        console.log(createPokeList)
        createPokeList.results.map((pokemon, index) => {
            const pokemonCard = document.createElement("li");
            const btnCard = document.createElement("button");
            const pokemonImg = document.createElement("img");
            const pokemonName = document.createElement("h4");
            const pokemonId = document.createElement("p");
            const pokemonType = document.createElement("span");
            pokemonName.innerText = pokemon.name;
            pokemonId.innerHTML = `Nro. ${index + 1}`;
            btnCard.appendChild(pokemonName);
            btnCard.appendChild(pokemonId);
            btnCard.appendChild(pokemonImg);
            btnCard.appendChild(pokemonType);
            pokemonCard.appendChild(btnCard);
            monstersList.appendChild(pokemonCard);
            let pokemonNameApi = pokemon.name;
            fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonNameApi}/`)
            .then (response => {
                if (!response.ok) {
                    throw Error(`Se ha presentado el error ${response.status}`)
                }
                return response.json();
            })
            .then (createPokeInfo => {
                pokemonImg.src = createPokeInfo.sprites.front_default;
                pokemonImg.alt = "Pokemon Img";
                createPokeInfo.types.map((types) => {
                    const pokemonTypes = document.createElement('span');
                    pokemonTypes.innerText = types.type.name;
                    pokemonType.appendChild(pokemonTypes);
                })
            })
        })
    })
    .catch(error => alert(error));
};

pokeApiCall()