import PropTypes from 'prop-types'
import ModeSelector from './ModeSelector.jsx'
//should this be a shared function

WelcomeModal.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  // mode: PropTypes.number.isRequired,
  onChange: PropTypes.func,
}
//hide .cards-container here
function WelcomeModal({ clickHandler, onChange }) {
  return (
    <div>
      <div id="welcome-modal" className="modal">
        <div className="modal-content">
          <span className="close-modal" onClick={clickHandler}>
            &times;
          </span>
          <h1>Welcome!</h1>
          <h3>Instructions</h3>
          <p>
            Click on each Pok&eacute;Mon card once - no more, no less! <br />
            The game ends if you click on any card twice.
          </p>
          <ModeSelector onChange={onChange} />
          <button id="start-game" type="button" onClick={clickHandler}>
            Let&apos;s Go
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal
