const pokemonContainer = document.querySelector(".pokemon-container");

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then((data) => {
        createPokemon(data);
    })
    }


function fetchPokemones(){
    let Id = Math.round(Math.random()*150)
    let Id2 = Math.round(Math.random()*150)
    let Id3 = Math.round(Math.random()*150)
    let Id4 = Math.round(Math.random()*150)
    let Id5 = Math.round(Math.random()*150)
    let Id6 = Math.round(Math.random()*150)
              fetchPokemon(Id)
              fetchPokemon(Id2)
              fetchPokemon(Id3)
              fetchPokemon(Id4)
              fetchPokemon(Id5)
              fetchPokemon(Id6)
} 


function createPokemon(pokemon){
  const card = document.createElement('div');
  card.classList.add('pokemon-block');
  const spriteConteiner = document.createElement('div');
  spriteConteiner.classList.add('img-container');
  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default
  spriteConteiner.appendChild(sprite);
  const number = document.createElement ('p');
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  card.appendChild(spriteConteiner);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}
fetchPokemones(6);
