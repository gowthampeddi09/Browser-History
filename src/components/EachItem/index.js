import './index.css'

const EachItem = props => {
  const {websiteDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = websiteDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="each-search-container">
      <p className="time">{timeAccessed}</p>
      <div className="website-details-container">
        <img src={logoUrl} className="website-logo" alt="domain logo" />
        <p className="website-name">{title}</p>
        <p className="website-url">{domainUrl}</p>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        className="delete-icon"
        alt="delete"
        onClick={onDelete}
      />

      <button
        type="button"
        className="delete-icon"
        onClick={onDelete}
        data-testid="delete"
      >
        Delete
      </button>
    </li>
  )
}

export default EachItem
