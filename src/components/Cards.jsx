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
  // build array cards

  //(?) how to properly check if data came back
  if (data !== null && data?.length > 1) {
    //    console.log(pokemonNumber)

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
          cardsArray.push(num)
        }
      }
      return cardsArray
    }

    const createCard = () => {
      let totalCards = getCardTotal(mode)

      console.log(totalCards)
      return (
        <>
          {totalCards.map((pokemonNumber) => (
            <div className="card" key={data[pokemonNumber]?.name}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`}
                alt={`Pokemon ${data[pokemonNumber]?.name}`}
              />

              <p>{`${data[pokemonNumber]?.name}`}</p>
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
