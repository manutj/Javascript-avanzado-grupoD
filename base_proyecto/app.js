let allPokemons = []

const getPokemons = (limit) => {
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}` 
axios.get(url)
.then((response)=>{
    let infoPokemons = response.data.results
    console.log(infoPokemons)
})
}


let createCards = (pokemons) => {
    let pokemonsContainer = document.getElementById('pokemon-container')
    pokemons.forEach((pokemon)=>{
        let card = document.createElement('div')
        let title = document.createElement('p')
        let image = document.createElement('img')

        card.append(title, image);
        pokemonsContainer.append(card)

    })
}