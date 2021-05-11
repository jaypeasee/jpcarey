import React, { useState, useEffect } from 'react'
import './Adventures.scss'
import AdventureCard from '../Card/AdventureCard'
import AdventureFilter from '../Filter/AdventureFilter'
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