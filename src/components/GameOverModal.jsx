import PropTypes from 'prop-types'

GameOverModal.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  restartGame: PropTypes.func,
  resetScore: PropTypes.func,
}
function GameOverModal({ clickHandler, score, restartGame, resetScore }) {
  const handleReset = () => {
    restartGame()
    resetScore()
  }
  return (
    <div>
      <div id="game-over-modal" className="modal">
        <div className="modal-content">
          <span className="close-modal" onClick={clickHandler}>
            &times;
          </span>
          <h1>Game Over</h1>
          <p>{score} Points</p>

          <button id="start-game" type="button" onClick={handleReset}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOverModal
