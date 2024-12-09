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

  const makeCard = (number) => {
    console.log(data[number].url.split('/')[6])
    cards.add({
      id: data[number].url.split('/')[6],
      name: data[number].name,
    })
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

      console.log('here')
      makeCard(num)
    }
    return cards
  }
  console.log(cards)
  const displayCards = () => {
    let totalCards = getCardTotal(mode)

    return (
      <>
        {Array.from(totalCards).map((pokemon) => (
          <button
            className="card"
            key={pokemon.id}
            value={pokemon.id}
            onClick={cardClickHandler}
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png')`,
            }}
          >
            {pokemon.name}
          </button>
        ))}
      </>
    )
  }
  const cardClickHandler = (event) => {
    setClickedPokemon((prevPokemon) => [...prevPokemon, event.target.value])
    displayCards()
  }
  return (
    <>
      <div className="cards-container">{displayCards()}</div>
    </>
  )
}

export default Cards
