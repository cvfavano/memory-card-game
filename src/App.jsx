import { useState, useEffect } from 'react'
import WelcomeModal from './components/WelcomeModal'
import GameOverModal from './components/GameOverModal.jsx'
import Cards from './components/Cards.jsx'
import Score from './components/Score.jsx'

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
    } else {
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

function useScore() {
  const [score, setScore] = useState(0)

  const addPoint = () => setScore((prevScore) => prevScore + 1)
  const resetScore = () => {
    setScore(0)
    console.log('yo')
  }
  return { score, addPoint, resetScore }
}

function useWelcome() {
  const [isWelcomeModal, setWelcomeModal] = useState(true)

  function startGame() {
    document.querySelector('.container').style.display = 'block'
    document.querySelector('#score-container').style.display = 'block'
    document.querySelector('#welcome-modal').style.display = 'none'
    document.querySelector('#game-over-modal').style.display = 'none'
    document.querySelector('.cards-container').style.display = 'flex'
    document.querySelector('#score-container').style.display = 'flex'

    setWelcomeModal(false)
  }
  return { isWelcomeModal, startGame }
}

function useGameOver() {
  const [isGameOver, setIsGameOver] = useState(false)

  function toggleEndModal() {
    document.querySelector('#game-over-modal').style.display = 'none'
  }
  const endGame = () => {
    setIsGameOver(true)
    document.querySelector('.container').style.display = 'none'
    document.querySelector('.cards-container').style.display = 'none'
    document.querySelector('#game-over-modal').style.display = 'block'
    document.querySelector('#score-container').style.display = 'none'
  }

  return { toggleEndModal, endGame, isGameOver }
}

const useMode = () => {
  const [mode, setMode] = useState(1)

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode)
  }
  return { mode, handleModeChange }
}

function App() {
  const { startGame } = useWelcome()
  const { pokemonList } = usePokemonData()
  const { mode, handleModeChange } = useMode()
  const { score, addPoint, resetScore } = useScore()
  const { endGame, toggleEndModal, isGameOver } = useGameOver()

  return (
    <div>
      <WelcomeModal clickHandler={startGame} onChange={handleModeChange} />

      {pokemonList.length && (
        <div className="container">
          <Score score={score} />
          <Cards
            data={pokemonList}
            mode={mode}
            endGame={endGame}
            gameStatus={isGameOver}
            score={score}
            setScore={addPoint}
          />
        </div>
      )}

      <GameOverModal
        score={score}
        clickHandler={toggleEndModal}
        restartGame={startGame}
        resetScore={resetScore}
      />
    </div>
  )
}

export default App
