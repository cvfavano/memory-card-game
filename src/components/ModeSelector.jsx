import PropTypes from 'prop-types'

ModeSelector.PropTypes = {
  mode: PropTypes.number.isRequired,
  setMode: PropTypes.func.isRequired,
}

function ModeSelector({ mode, setMode }) {
  console.log(mode)

  const options = [
    { value: 1, label: 'Easy' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'Difficult' },
  ]

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <div>
      <select value={mode} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected Value: {mode}</p>
    </div>
  )
}

export default ModeSelector
