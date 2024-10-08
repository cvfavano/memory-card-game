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

  //is this necessary, breaking out in another function
   function getData() {
    const data = localStorage.getItem('pokemon')
    const parsedData = JSON.parse(data)

    if(parsedData != null) {
      setPokemonList(parsedData)
      return true
    }
  }

  useEffect( () => {
    const isDataLocalStorage = getData();

    //check parsedData, as useState doesnt update instantly
   if(!isDataLocalStorage ){
      fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300")
        .then(response => response.json()) 
        
        .then(response => {
       //   console.log(response.results.json())
         JSON.stringify(response.results)

        
          localStorage.setItem( "pokemon", JSON.stringify(response.results))
          setPokemonList( localStorage.getItem('pokemon'))
        })
        .catch(error => console.log('error', error))   
    }    

  },[])
  return { pokemonList }
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
  // eslint-disable-next-line no-unused-vars
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
      {/* <Cards data = { pokemonList } />
      <Cards data = { pokemonList } />
      <Cards data = { pokemonList } />
      <Cards data = { pokemonList } />
      <Cards data = { pokemonList } /> */}
      <GameOverModal clickHandler = {toggleModal}/>
    </div>
    )
}

export default App
