import PropTypes from 'react'

Score.PropTypes = {
  score: PropTypes.number,
}

function Score({ score }) {
  return (
    <div id="score-container">
      <p>Score: {score} Points</p>
    </div>
  )
}
export default Score
