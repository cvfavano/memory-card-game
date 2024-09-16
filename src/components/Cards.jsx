import { useEffect, useState }  from 'react'

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
function Cards() {

    const [pokemonList, setPokemonList] = useState([{}]) 
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300")
        .then(response => response.text())
        .then(result => setPokemonList(result))
        .catch(error => console.log('error', error));
    },[])

    console.log(pokemonList)
}

export default  Cards