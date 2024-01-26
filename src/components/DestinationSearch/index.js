// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'
class DestinationSearch extends Component {
  state = {searchItem: ''}

  onChangeSearchInput = event => {
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {searchItem} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              value={searchItem}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinations-list">
            {searchResults.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                destinationDetails={eachItem}
                deleterUser={this.deleterUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
