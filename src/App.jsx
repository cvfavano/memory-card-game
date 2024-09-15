import { useState, useEffect }  from 'react'
import WelcomeModal from './components/WelcomeModal'
import GameOverModal from './components/GameOverModal.jsx';
import PropTypes from 'prop-types';

useWelcome.PropTypes = { 
  isWelcomeModal: PropTypes.bool.isRequired,
  setWelcomeModal: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  setIsGameOver: PropTypes.bool.isRequired
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
  const { toggleModal}  = useGameOver();
  return(
    <div>
      <WelcomeModal clickHandler={toggleWelcomeModal}/>

      <GameOverModal clickHandler = {toggleModal}/>
    </div>
    )
}

export default App
