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

  function getData() {
    const data = localStorage.getItem('pokemon')
    return data ? JSON.parse(data) : null
  }

  useEffect(() => {
    const parsedData = getData()
    if (parsedData) {
      setPokemonList(parsedData)
      console.log('here')
    } else {
      console.log('yo')
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=300')
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem('pokemon', JSON.stringify(response.results))
          setPokemonList(localStorage.getItem('pokemon'))
        })
        .catch((error) => console.log('error', error))
    }
  }, [])

  return { pokemonList }
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
  const [isGameOver, setIsGameOver] = useState(false)

  //this could be shared also(?) No. fix this to toggle function only
  function toggleModal() {
    document.querySelector('#game-over-modal').style.display = 'block'
  }
  const endGame = () => {
    setIsGameOver(true)
    toggleModal()
  }
  return { endGame }
}

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
  const { pokemonList } = usePokemonData()
  const { endGame, toggleModal } = useGameOver()
  console.log(pokemonList)
  return (
    <div>
      <WelcomeModal
        clickHandler={toggleWelcomeModal}
        onChange={handleModeChange}
        startGame={closeModal}
      />

      {pokemonList.length > 0 && (
        <Cards data={pokemonList} mode={mode} gameStatus={endGame} />
      )}
      <GameOverModal clickHandler={toggleModal} />
    </div>
  )
}

export default App
