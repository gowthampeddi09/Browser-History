import {Component} from 'react'
import EachItem from '../EachItem'
import './index.css'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {
      searchInput: '',
      userHistory: initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteHistory = id => {
    const {userHistory} = this.state
    const filteredUserList = userHistory.filter(eachItem => eachItem.id !== id)
    this.setState({userHistory: filteredUserList})
  }

  render() {
    const {searchInput, userHistory} = this.state

    const searchHistory = userHistory.filter(eachSearch =>
      eachSearch.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="browser-history-top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <div className="search-input-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search History"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </div>
        <div className="browser-history-bottom-section">
          <div className="browser-history-container">
            <ul>
              {searchHistory.length > 0 ? (
                searchHistory.map(eachSearch => (
                  <EachItem
                    key={eachSearch.id}
                    websiteDetails={eachSearch}
                    onDeleteHistory={this.onDeleteHistory}
                  />
                ))
              ) : (
                <p>There is no history to show</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
