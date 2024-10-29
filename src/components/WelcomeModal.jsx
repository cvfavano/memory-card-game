import PropTypes from 'prop-types'
import ModeSelector from './ModeSelector.jsx'
//should this be a shared function
function closeModal() {
  document.querySelector('#welcome-modal').style.display = 'none'
}

WelcomeModal.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  mode: PropTypes.number.isRequired,
  setMode: PropTypes.func.isRequired,
}

//why is this not valid {clickHandler}
function WelcomeModal({ clickHandler, mode, setMode }) {
  console.log(clickHandler)
  console.log(mode)
  console.log(setMode)
  return (
    //should this be hardcoded instead of component?

    <div>
      <div id="welcome-modal" className="modal">
        <div className="modal-content">
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>
          <p>Welcome!</p>
          <h2>Game Play</h2>
          <p>Instructions here</p>

          <ModeSelector mode={mode} setMode={setMode} />
          {/* why linting error */}
          <button id="start-game" type="button" onClick={clickHandler}>
            Let&apos;s Go
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal
