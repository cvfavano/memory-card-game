// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
//console.log(props.data[0]) //bulbasaur

import PropTypes from 'prop-types'

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  mode: PropTypes.number.isRequired,
}

function Cards({ data, mode }) {
  // ***** TODO *****
  //build array clicked

  if (data !== null && data?.length > 1) {
    console.log(data)

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

        if (!cardsArray.includes(num)) {
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

      console.log(totalCards)
      return (
        <>
          {totalCards.map((pokemon) => (
            <div className="card" key={pokemon.id}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={`Pokemon ${pokemon.name}`}
              />

              <p>{`${pokemon.name}`}</p>
            </div>
          ))}
        </>
      )
    }

    return (
      <>
        <div className="cards-container">{createCard()}</div>
      </>
    )
  }
}

export default Cards
