import { useState }  from 'react'
import WelcomeModal from './components/WelcomeModal'
import PropTypes from 'prop-types';

useWelcome.PropTypes = { 
  isWelcomeModal: PropTypes.bool.isRequired
}

function useWelcome() {
  const [isWelcomeModal, setWelcomeModal ] = useState(true) 

  
  function toggleWelcomeModal() {
    document.querySelector('#welcome-modal').style.display = 'none';
        setWelcomeModal(false)
  }
  return {isWelcomeModal, toggleWelcomeModal}
}


function App() {
  const { toggleWelcomeModal} = useWelcome();
  return(
    <div>
      <WelcomeModal clickHandler={toggleWelcomeModal}/>
    </div>
    )
}

export default App
