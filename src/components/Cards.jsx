

// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
function Cards(props) {
//console.log(props.data[0]) //bulbasaur
//todo push to array for total number of cards, based on difficulty
//loop through array to create card

   
    // eslint-disable-next-line react/prop-types
    console.log(props.data.length)
    // eslint-disable-next-line react/prop-types
    if ( props.data !== null  && props.data.length > 1 ){
        
    //    console.log(pokemonNumber)
    
        function getRandomInt(min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)

            return Math.floor(Math.random() * (max-min + 1)) + min
        }

        const createCard = () => {
        
            // eslint-disable-next-line react/prop-types
            const num = getRandomInt(0, props.data.length)
   
            return (
                <div className="card">
                  <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`} 
                    alt={`Pokemon ${props.data[num-1].name}`} 
                  />
                  {/* <p>{`Pokemon ${num-1}`}</p> */}
                  <p>{`${props.data[num-1].name}`}</p>
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
            </div >
        )
    }
}

export default  Cards