// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
import PropTypes from 'prop-types'

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  game: PropTypes.array.isRequired,
  mode: PropTypes.number.isRequired,
}

function Cards({ data, mode }) {
  //console.log(props.data[0]) //bulbasaur
  //todo push to array for total number of cards, based on difficulty
  //loop through array to create card

  //(?) how to properly check if data came back
  if (data !== null && data?.length > 1) {
    //    console.log(pokemonNumber)

    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)

      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const getCardTotal = (mode) => {
      let totalCards

      mode === 3
        ? (totalCards = 12)
        : mode === 2
          ? (totalCards = 9)
          : (totalCards = 6)

      return totalCards
    }

    const createCard = () => {
      let totalCards = getCardTotal(mode)
      const num = getRandomInt(0, data.length)
      const url = data[num].url
      const pokemonIChooseYou = url.split('/')[6]
      //      console.log({ url, pokemonIChooseYou, num, data: props.data })
      console.log(totalCards)
      return (
        <div className="card">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIChooseYou}.png`}
            alt={`Pokemon ${data[num]?.name}`}
          />

          <p>{`${data[num]?.name}`}</p>
        </div>
      )
    }

    //create array with mode length, then map over it in return
    return (
      <>
        <div className="cards-container">{createCard()}</div>
      </>
    )
  }
}

export default Cards
