import React, { useState, useEffect } from 'react'
import './AdventuresContainer.scss'
import AdventureCard from '../Card/AdventureCard.jsx'
import AdventureFilter from '../Filter/AdventuresFilter.jsx'
import { adventureDetails } from '../adventureData'

const Adventures = () => {
  const [currentAdventures, setCurrentAdventures] = useState([])

  useEffect(() =>{
    setCurrentAdventures(adventureDetails)
  }, [])

  const filterAdventures = (searchTerm) => {
    if (searchTerm == '--') {
      setCurrentAdventures(adventureDetails)
    } else {
      setCurrentAdventures(adventureDetails.filter(adventure => {
        return adventure.searchTerms.includes(searchTerm)
      }))
    }
  }

  const AdventureCards = () => {
    return currentAdventures.map(adventure => {
      const {id, tripName, location, photo, days, exactDate, roughDate, searchTerms} = adventure
      return (
        <AdventureCard 
          key={id}
          tripName={tripName}
          location={location}
          photo={photo}
          days={days}
          exactDate={exactDate}
          roughDate={roughDate}
          searchTerms={searchTerms}
        />
      )
    })
  }

    return (
      <section className="photos-section">
        <AdventureFilter filterAdventures={filterAdventures}/>
        <section className="adventure-library">
          <AdventureCards/>
        </section>
      </section>
    )
}

export default Adventures;