// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
import PropTypes from 'prop-types'

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  game: PropTypes.array.isRequired,
}

function Cards(props) {
  //console.log(props.data[0]) //bulbasaur
  //todo push to array for total number of cards, based on difficulty
  //loop through array to create card

  if (props.data !== null && props.data?.length > 1) {
    //    console.log(pokemonNumber)

    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)

      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const createCard = () => {
      const num = getRandomInt(0, props.data.length)
      const url = props.data[num].url
      const pokemonIChooseYou = url.split('/')[6]
      // console.log({ url, pokemonIChooseYou, num, data: props.data })

      return (
        <div className="card">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIChooseYou}.png`}
            alt={`Pokemon ${props.data[num]?.name}`}
          />
          {/* <p>{`Pokemon ${num-1}`}</p> */}
          {}
          <p>{`${props.data[num]?.name}`}</p>
        </div>
      )
    }
    //  console.log(props[createCard.name])

    return (
      <div className="cards-container">
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
      </div>
    )
  }
}

export default Cards
