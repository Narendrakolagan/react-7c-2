import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {id, suggestion} = suggestionDetails

  return (
    <li className="list-content-container">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img"
      />
    </li>
  )
}

export default SuggestionItem
