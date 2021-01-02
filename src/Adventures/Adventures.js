import React, { Component } from 'react'
import './Adventures.scss'
import AdventureCard from '../AdventureCard/AdventureCard'
import AdventureSearch from '../AdventureSearch/AdventureSearch'
import { adventureData } from './AdventureData'


class Adventures extends Component {
    constructor() {
        super()
        this.state = {
            displayedAdventures: []
        }
    }

    componentDidMount() {
        this.setState({
            displayedAdventures: this.createAdventureCards(adventureData)
        })
    }

    createAdventureCards = (adventures) => {
        return adventures.map(adventure => {
            const {id, tripName, location, photos, days, exactDate, roughDate} = adventure
            return (
                <AdventureCard 
                    key={id}
                    tripName={tripName}
                    location={location}
                    photos={photos}
                    days={days}
                    exactDate={exactDate}
                    roughDate={roughDate}
                />
            )
        })
    }

    filterAdventures = (searchTerm) => {
        const term = searchTerm.toLowerCase()
        const filteredAdventures = adventureData.filter(adventure => {
            const name = adventure.tripName.toLowerCase()
            const place = adventure.location.toLowerCase()
            console.log(place)
            return name.includes(term) || place.includes(term)
        })
        this.setState({
            displayedAdventures: this.createAdventureCards(filteredAdventures)
        })
    }

    resetAdventureLibrary = () => {
        this.setState({
            displayedAdventures: this.createAdventureCards(adventureData)
        })
    }

    render() {
        return (
            <section className="photos-section">
                <AdventureSearch 
                    filterAdventures={this.filterAdventures}
                    resetAdventureLibrary={this.resetAdventureLibrary}
                />
                <section className="adventure-library">
                    {this.state.displayedAdventures}
                </section>
                {this.state.displayedAdventures.length === 0 &&
                <h1 className="error-message">Oops! No Adventures Found</h1>}
            </section>
        )
    }
}

export default Adventures;