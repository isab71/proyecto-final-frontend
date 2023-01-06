const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";
console.log(URL_API);

fetch(URL_API)
    .then((response) => response.json())
    .then((data) => {
        const characters = data.results;

        for (let character of characters) {
            console.log(character.name);
            $container.innerHTML += `
         
        <div class="card"> 
        <img class="character-img" src="${character.image}" alt="imagen de ${character.name}"> 
        <div class="text">
        <h3>${character.name} </h3>
        
        <p> <span>Status:</span> ${character.status}</p>
        <p><span> Species: </span> ${character.species}</p>
        <p> <span> Origin: </span> ${character.origin.name}</p>
        </div>
        </div>
      `;

        }
    });
