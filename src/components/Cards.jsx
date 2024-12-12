// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
//console.log(props.data[0]) //bulbasaur
import { useState } from 'react'
import PropTypes from 'prop-types'

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  mode: PropTypes.number.isRequired,
  gameStatus: PropTypes.func,
  // trackedPokemon: PropTypes.array.isRequired,
}

function Cards({ data, mode, gameStatus }) {
  // console.log(gameStatus)
  //gameStatus calls endGame
  // ***** TODO *****
  //fix dupes
  //fix css of button or figure out how to click div with nested elements and get div id
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

  function gameOver() {
    const cardsContainer = document.querySelector('.cards-container')
    cardsContainer.style.display = 'none'
  }
  console.log(cards)
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
              backgroundImage: `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png')`,
            }}
          >
            {data[pokemon].name}
          </button>
        ))}
      </>
    )
  }
  const cardClickHandler = (event) => {
    setClickedPokemon((prevPokemon) => [...prevPokemon, event.target.value])
    console.log(clickedPokemon)

    if (!clickedPokemon.includes(event.target.value)) {
      displayCards()
    } else {
      console.log(event.target.value)
      gameOver()
      console.log('GAME OVER')
    }
  }
  return (
    <>
      <div className="cards-container">{displayCards()}</div>
    </>
  )
}

export default Cards
