// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png
//console.log(props.data[0]) //bulbasaur
import { useState } from 'react'
import PropTypes from 'prop-types'

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  mode: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  gameStatus: PropTypes.bool,
  addPoint: PropTypes.func,
  endGame: PropTypes.func,
  setScore: PropTypes.func,
  // trackedPokemon: PropTypes.array.isRequired,
}

function Cards({ data, mode, endGame, gameStatus, score, setScore }) {
  // console.log(gameStatus)
  //gameStatus calls endGame
  // ***** TODO *****

  //fix css of button or figure out how to click div with nested elements and get div id

  console.log(score)
  let cards = new Set()
  const [clickedPokemon, setClickedPokemon] = useState([])

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const getCardTotal = (modeDifficulty) => {
    let totalCardNumber

    modeDifficulty === 3
      ? (totalCardNumber = 12)
      : modeDifficulty === 2
        ? (totalCardNumber = 9)
        : (totalCardNumber = 6)

    while (cards.size < totalCardNumber) {
      let num = getRandomInt(0, data.length)

      cards.add(parseInt(data[num].url.split('/')[6]))
    }
    return cards
  }

  function gameOver(num) {
    endGame()
    console.log(gameStatus)
    console.log('GAME OVER')
    console.log(num)
  }

  const displayCards = () => {
    let totalCards = getCardTotal(mode)

    return (
      <>
        {Array.from(totalCards).map((pokemon) => (
          <button
            className="card"
            key={pokemon}
            value={pokemon}
            onClick={cardClickHandler}
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}.png')`,
            }}
          >
            {data[pokemon - 1].name}
          </button>
        ))}
      </>
    )
  }
  const cardClickHandler = (event) => {
    setClickedPokemon((prevPokemon) => [...prevPokemon, event.target.value])

    if (!clickedPokemon.includes(event.target.value)) {
      displayCards()
      console.log('+1')
      setScore()
    } else {
      gameOver(event.target.value)
    }
  }
  return (
    <>
      <div className="cards-container">{displayCards()}</div>
    </>
  )
}

export default Cards
