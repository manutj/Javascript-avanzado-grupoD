
const getPokemons = (limit) => {
let allPokemons = []
const url = `https://pokeapi.co/api/v2/pokemonlimit=${limit}` 
axios.get(url)
.then((response)=>{
    let infoPokemons = response.data.results
    //console.log(infoPokemons)
    infoPokemons.forEach((pokemon)=>{
       axios.get(pokemon.url) 
       .then((moreInfoPokemon)=>{
       //console.log(moreInfoPokemon.data)

        let infoIndividualPokemon = {
            nombre: pokemon.name,
            tipos: moreInfoPokemon.data.types.map((tipo)=>tipo.type.name),
            urlImage : moreInfoPokemon.data.sprites.front_default
        }

        //console.log(infoIndividualPokemon)

        allPokemons.push(infoIndividualPokemon)
       })
       .catch((error)=>console.log(error))
    })
    //console.log(allPokemons)
})
.catch((error)=>console.log(error.message))

// VER COMO IMPLEMENTAR PROMESAS EN LUGAR DE TIMEOUTS

setTimeout(() => {
    createCards(allPokemons)
}, 3000);


}


let createCards = (pokemons) => {
    console.log('Ejecutando funcion', pokemons.length)
    let pokemonsContainer = document.getElementById('pokemon-container')
    pokemons.forEach((pokemon)=>{
        let card = document.createElement('div')
        let title = document.createElement('p')
        let image = document.createElement('img')

        card.append(title, image);
        pokemonsContainer.append(card)

        title.innerText = pokemon.nombre
        image.src = pokemon.urlImage

        card.setAttribute('class', 'card')

    })
}

