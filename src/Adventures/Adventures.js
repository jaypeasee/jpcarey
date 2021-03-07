import React, { Component } from 'react'
import './Adventures.scss'
import AdventureCard from '../AdventureCard/AdventureCard'
import { adventureData } from './AdventureData'

class Adventures extends Component {
  constructor() {
    super()
    this.state = {
      currentAdventures: []
    }
  }

  componentDidMount() {
    this.setState({
      currentAdventures: adventureData
    })
  }

  createAdventureCards = () => {
    return this.state.currentAdventures.map(adventure => {
      const {id, tripName, location, photos, days, exactDate, roughDate, searchTerms} = adventure
      return (
        <AdventureCard 
          key={id}
          tripName={tripName}
          location={location}
          photos={photos}
          days={days}
          exactDate={exactDate}
          roughDate={roughDate}
          searchTerms={searchTerms}
        />
      )
    })
  }

  render() {
    return (
      <section className="photos-section">
        <section className="adventure-library">
          {this.createAdventureCards()}
        </section>
          {this.state.currentAdventures.length === 0 &&
          <h1 className="error-message">Oops! No Adventures Found</h1>}
      </section>
    )
  }
}

export default Adventures;