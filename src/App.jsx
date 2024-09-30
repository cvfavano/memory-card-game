import { useState, useEffect }  from 'react'
import WelcomeModal from './components/WelcomeModal'
import GameOverModal from './components/GameOverModal.jsx'
import Cards from './components/Cards.jsx'
import PropTypes from 'prop-types'

useWelcome.PropTypes = { 
  isWelcomeModal: PropTypes.bool.isRequired,
  setWelcomeModal: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  setIsGameOver: PropTypes.bool.isRequired
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max-min + 1)) + min
}

function usePokemonData() {
  const [pokemonList, setPokemonList] = useState([{}])

   function getData() {
    const data = localStorage.getItem('pokemon')
    // const parsedData = JSON.parse(data)
    return data ? JSON.parse(data) : null
    // if (parsedData != null){
    //   setPokemonList(parsedData)
    //   return true
    // } 
  }

  useEffect( () => {
    const parsedData = getData();
  
    if (parsedData){
      setPokemonList(parsedData)
     // return true
    } 
//  console.log(pokemonList)
    //check parsedData, as useState doesnt update instantly
   else{
      fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300")
        .then(response => response.json()) 
        
        .then(response => {
       //   console.log(response.results.json())
        // JSON.stringify(response.results)

         //loop through array and stringify the key
          localStorage.setItem( "pokemon", JSON.stringify(response.results))
          setPokemonList( localStorage.getItem('pokemon'))
        })
        .catch(error => console.log('error', error))   
    }    
  },[])
  return { pokemonList }
}


function useWelcome() {
  //should this even be state
  const [isWelcomeModal, setWelcomeModal ] = useState(true) 

  
  function toggleWelcomeModal() {
    document.querySelector('#welcome-modal').style.display = 'none'
    setWelcomeModal(false)
  }
  return {isWelcomeModal, toggleWelcomeModal}
}

function useGameOver() {
  // eslint-disable-next-line no-unused-vars
  const [isGameOver, setIsGameOver ] = useState(false) 

  //this could be shared also(?)
  function toggleModal() {
    document.querySelector('#game-over-modal').style.display = 'block'
   // setIsGameOver(true)
  }
  return {isGameOver, toggleModal}
}
//rename this
function useRandomNumbers() {

  // const [numbers, setNumbers] = useState([])
  const [gamePokemon, setGamePokemon] = useState([{}])
  const { pokemonList } = usePokemonData()

  // useEffect(() => {
  //   const numbers = new Set()

  //   while(numbers.size < 30){
  //     let number = getRandomInt(0,299)
  //     numbers.add(number)
  //   }

  //   setNumbers(Array.from(numbers))
    
  // },[])
 console.log(pokemonList[0])

  useEffect(() => {
    const pokemons = new Set()
   
    while(pokemons.size < 20){
      const number = getRandomInt(0,299)
      console.log(number)
      const pokemon = pokemonList[number]
     
      console.log({pokemon})
      pokemons.add(pokemon)
console.log(pokemons)
    //  return
    }
//
    setGamePokemon(Array.from(pokemons))

//    setGamePokemon(gamePokemon[])
  },[pokemonList])
console.log(gamePokemon)
  //set new array here for game pokemon
  return gamePokemon
}

// //

function App() {
  //maybe merge into useModal hook
  const { toggleWelcomeModal } = useWelcome()
 // const { numberList } = usePokemonGameList() 
  const { pokemonList } = usePokemonData()
  const { toggleModal }  = useGameOver()
  const gamePokemon = useRandomNumbers()


  
  return(
    <div>
      <WelcomeModal clickHandler= { toggleWelcomeModal } />
      <Cards 
        data = { pokemonList }
       // num = { numberList }
        game = {gamePokemon}
     />
      {/* <Cards data = { pokemonList } />
      <Cards data = { pokemonList } />
      <Cards data = { pokemonList } />
      <Cards data = { pokemonList } /> */}
      <GameOverModal clickHandler = {toggleModal}/>
    </div>
    )
}

export default App
