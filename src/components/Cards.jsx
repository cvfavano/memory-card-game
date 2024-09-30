

// //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
function Cards(props) {
    console.log('rendered 2')
//console.log(props.data[0]) //bulbasaur
//todo push to array for total number of cards, based on difficulty
//loop through array to create card

    // eslint-disable-next-line react/prop-types
    if ( props.data !== null  && props.data?.length > 1 ){
        
    //    console.log(pokemonNumber)
    
        function getRandomInt(min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)

            return Math.floor(Math.random() * (max-min + 1)) + min
        }

        const createCard = () => {
        
            // eslint-disable-next-line react/prop-types
            const num = getRandomInt(0, props.data.length)
            const url = props.data[num].url;
            const pokemonIChooseYou = url.split('/')[6];
            console.log({url, pokemonIChooseYou, num, data: props.data})
            
            return (
                <div className="card">
                  <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIChooseYou}.png`} 
                    // eslint-disable-next-line react/prop-types
                    alt={`Pokemon ${props.data[num]?.name}`} 
                  />
                  {/* <p>{`Pokemon ${num-1}`}</p> */}
                  {/* eslint-disable-next-line react/prop-types */}
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
            </div >
        )
    }
}

export default  Cards