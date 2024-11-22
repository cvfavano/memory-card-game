import { useState, useEffect } from 'react'
import WelcomeModal from './components/WelcomeModal'
import GameOverModal from './components/GameOverModal.jsx'
import Cards from './components/Cards.jsx'
import PropTypes from 'prop-types'

useWelcome.PropTypes = {
  isWelcomeModal: PropTypes.bool.isRequired,
  setWelcomeModal: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  setIsGameOver: PropTypes.bool.isRequired,
}

function usePokemonData() {
  const [pokemonList, setPokemonList] = useState([])
  // const [isRandom, setIsRandom] = useState(false)
  // const [randomPokemons, setRandomPokemons] = useState(new Set());
  function getData() {
    const data = localStorage.getItem('pokemon')
    return data ? JSON.parse(data) : null
  }

  useEffect(() => {
    const parsedData = getData()
    if (parsedData) {
      setPokemonList(parsedData)
    } else {
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=300')
        .then((response) => response.json())
        .then((response) => {
          //loop through array and stringify the key
          localStorage.setItem('pokemon', JSON.stringify(response.results))
          setPokemonList(localStorage.getItem('pokemon'))
        })
        .catch((error) => console.log('error', error))
    }
  }, [])

  // useEffect(() => {
  //   const getRandomPokemon = (count) => {
  //     // getting random 20
  //     const selectedPokemon = new Set()
  //     while (selectedPokemon.size < count) {
  //       const number = Math.floor(Math.random() * pokemonList.length)
  //       const pokemon = pokemonList[number]
  //       if (pokemon) {
  //         selectedPokemon.add(pokemon)
  //       }
  //     }
  //     return Array.from(selectedPokemon)
  //   }
  //   if (pokemonList?.length > 0 && !isRandom) {
  //     const listy = getRandomPokemon(20)
  //     setIsRandom(true)
  //     setPokemonList(listy)
  //   }
  // }, [pokemonList, isRandom])

  return { pokemonList }
  // , randomPokemons: pokemonList }
}

function useWelcome() {
  //should this even be state NOO, fix this to toggle function only
  const [isWelcomeModal, setWelcomeModal] = useState(true)

  function toggleWelcomeModal() {
    document.querySelector('#welcome-modal').style.display = 'none'
    document.querySelector('.cards-container').style.display = 'flex'
    setWelcomeModal(false)
  }
  return { isWelcomeModal, toggleWelcomeModal }
}

function useGameOver() {
  // eslint-disable-next-line no-unused-vars
  const [isGameOver, setIsGameOver] = useState(false)

  //this could be shared also(?) No. fix this to toggle function only
  function toggleModal() {
    document.querySelector('#game-over-modal').style.display = 'block'

    // setIsGameOver(true)
  }
  return { isGameOver, toggleModal }
}
//rename this
// const getRandomPokemon = (count) => {
//   const selectedPokemon = new Set();
//   const [gamePokemon, setGamePokemon] = useState([{}])
//   const { pokemonList } = usePokemonData()

//   while(selectedPokemon.size < count){
//     const number = Math.floor(Math.random() * pokemonList.length)
//     const pokemon = pokemonList[number]
//     if(pokemon){
//       selectedPokemon.add(pokemon)
//     }
//   }
//   setRandomPokemons(selectedPokemon)
// }
// useEffect(() => {
//   const numbers = new Set()

//   while(numbers.size < 30){
//     let number = getRandomInt(0,299)
//     numbers.add(number)
//   }
//   setNumbers(Array.from(numbers))

// },[])
// //

function closeModal() {
  document.querySelector('#welcome-modal').style.display = 'none'
}
function App() {
  const [mode, setMode] = useState(1)

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode)
  }

  //maybe merge into useModal hook
  const { toggleWelcomeModal } = useWelcome()
  // const { numberList } = usePokemonGameList()
  const { pokemonList } = usePokemonData()
  const { toggleModal } = useGameOver()

  return (
    <div>
      <WelcomeModal
        clickHandler={toggleWelcomeModal}
        onChange={handleModeChange}
        startGame={closeModal}
      />
      <Cards data={pokemonList} mode={mode} />

      <GameOverModal clickHandler={toggleModal} />
    </div>
  )
}

export default App
