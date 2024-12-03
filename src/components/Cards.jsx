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

  const [clickedPokemon, setClickedPokemon] = useState([])
  const [cards, setCards] = useState([])

  const appendCard = () => {
    setCards((prevCards, newCard) => {
      return { ...prevCards, newCard }
    })
  }
  //console.log(clickedPokemon)
  if (data !== null && data?.length > 1) {
    // console.log(data)

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

      let cardsArray = []

      for (let i = 0; i < totalCardNumber; i++) {
        let num = getRandomInt(0, data.length)
        if (
          !cardsArray.find((pokemon) => pokemon.id == num) ||
          cardsArray.length === 0
        ) {
          let pokemonId = data[num].url.split('/')[6]
          let pokemon = {
            id: pokemonId,
            name: data[num].name,
          }
          cardsArray.push(pokemon)
        }
      }
      return cardsArray
    }

    const createCard = () => {
      let totalCards = getCardTotal(mode)

      return (
        <>
          {totalCards.map((pokemon) => (
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
      createCard()
    }
    return (
      <>
        <div className="cards-container">{createCard()}</div>
      </>
    )
  }
}

export default Cards
