import { useState, useEffect }  from 'react'
import WelcomeModal from './components/WelcomeModal'
import GameOverModal from './components/GameOverModal.jsx'
import Cards from './components/Cards.jsx'
import PropTypes from 'prop-types';

useWelcome.PropTypes = { 
  isWelcomeModal: PropTypes.bool.isRequired,
  setWelcomeModal: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  setIsGameOver: PropTypes.bool.isRequired
}
function usePokemonData() {
  const [pokemonList, setPokemonList] = useState([{}])

  useEffect( () => {
    if( window.localStorage.length === 0 ){
      console.log('hi')
      fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300")
        .then(response => response.json())
        //is this ok?
        .then(result => {
          setPokemonList(result)


      //    "pokemon", JSON.stringify(result)
         localStorage.setItem( "pokemon", JSON.stringify(result.results)) 
        })
        .catch(error => console.log('error', error))   
    }    
  },[])
  return {pokemonList}
}


function useWelcome() {
  //should this even be state
  const [isWelcomeModal, setWelcomeModal ] = useState(true) 

  
  function toggleWelcomeModal() {
    document.querySelector('#welcome-modal').style.display = 'none';
    setWelcomeModal(false)
  }
  return {isWelcomeModal, toggleWelcomeModal}
}

function useGameOver() {
  const [isGameOver, setIsGameOver ] = useState(false) 

  //this could be shared also(?)
  function toggleModal() {
    document.querySelector('#game-over-modal').style.display = 'block';
   // setIsGameOver(true)
  }
  return {isGameOver, toggleModal}
}

function App() {
  //maybe merge into useModal hook
  const { toggleWelcomeModal} = useWelcome();

  const { pokemonList } = usePokemonData();
  const { toggleModal }  = useGameOver();
  return(
    <div>
      <WelcomeModal clickHandler={toggleWelcomeModal}/>
    <Cards data = { pokemonList } />
      <GameOverModal clickHandler = {toggleModal}/>
    </div>
    )
}

export default App
