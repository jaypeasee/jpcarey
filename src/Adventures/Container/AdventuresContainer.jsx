import React, { useState, useEffect } from 'react'
import './AdventuresContainer.scss'
import AdventureCard from '../Card/AdventureCard.jsx'
import AdventureFilter from '../Filter/AdventuresFilter.jsx'
import { allAdventures } from '../adventureData.js'

const Adventures = () => {
  const [currentAdventures, setCurrentAdventures] = useState([])

  useEffect(() =>{
    setCurrentAdventures(allAdventures)
  }, [])

  const filterAdventures = (searchTerm) => {
    if (searchTerm == '--') {
      setCurrentAdventures(allAdventures)
    } else {
      setCurrentAdventures(allAdventures.filter(adventure => {
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