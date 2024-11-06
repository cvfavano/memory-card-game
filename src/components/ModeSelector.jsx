import PropTypes from 'prop-types'

ModeSelector.propTypes = {
  mode: PropTypes.number.isRequired,
  onChange: PropTypes.func,
}

function ModeSelector({ mode, onChange }) {
  console.log(onChange)
  const options = [
    { value: 1, label: 'Easy' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'Difficult' },
  ]

  const handleChange = (event) => {
    onChange(event.target.value)
    console.log(event.target.value)
    console.log(onChange(event.target.value))
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
