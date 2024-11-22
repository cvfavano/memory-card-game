import PropTypes from 'prop-types'

ModeSelector.propTypes = {
  mode: PropTypes.number,
  onChange: PropTypes.func,
}

function ModeSelector({ mode, onChange }) {
  const options = [
    { value: 1, label: 'Easy Mode' },
    { value: 2, label: 'Medium Mode' },
    { value: 3, label: 'Difficult Mode' },
  ]

  const handleChange = (event) => {
    onChange(parseInt(event.target.value))
  }

  return (
    <div>
      <select value={mode} onChange={handleChange} id="game-mode">
        {options.map((option, index) => (
          <option key={option.label + '-' + index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* <p>Selected Value: {mode}</p> */}
    </div>
  )
}

export default ModeSelector
