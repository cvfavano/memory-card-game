import {useState} from 'react';

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png
function Cards(props) {
console.log(props.data)
    if (props.data.length != 1 ){
        const [pokemonNumber, setPokemonNumber] = useState(0);
        console.log(props)
    
        function getRandomInt(min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)

            return Math.floor(Math.random() * (max-min + 1)) + min;
        }
        //is this state?
        // setPokemonNumber(getRandomInt(0,299))

        const createCard = () => {
            //these numbers need to be dynamic
            console.log(pokemonNumber)
            const num = setPokemonNumber(getRandomInt(0,pokemonNumber.length))
        //   const int = 1
                const card = {
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + num + ".png",
                    name: num
        } 
            

         return card
        
        
    }


  //  console.log(props[createCard.name])

    return (
        <div>

            <img src={`${createCard.image}`} />
            {/* <p>{props.data[createCard.name].name}</p> */}
         
        </div >
    )
}
}

export default  Cards