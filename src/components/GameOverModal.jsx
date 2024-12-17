import PropTypes from 'prop-types'

GameOverModal.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  // mode: PropTypes.number.isRequired,
  restartGame: PropTypes.func,
}
function GameOverModal({ clickHandler, restartGame }) {
  // function closeModal() {
  //   document.querySelector('#game-over-modal').style.display = 'none'
  // }

  return (
    <div>
      <div id="game-over-modal" className="modal">
        <div className="modal-content">
          <span className="close-modal" onClick={clickHandler}>
            &times;
          </span>
          <p>Game Over</p>
          <p>stats</p>

          <button id="start-game" type="button" onClick={restartGame}>
            Play Again
          </button>
          {/* <button id='start-game' type='button' onClick={clickHandler}>Play Again</button> */}
        </div>
      </div>
    </div>
  )
}

export default GameOverModal
