import "./AdventureFilter.scss"
import { adventureSearchTerms } from '../adventureData'
import { click, tick } from '../../sounds/sounds'
import React, { useState, useEffect } from 'react'

const AdventureFilter = (props) => {

  const [currentOption, setCurrentOption] = useState('')

  useEffect(() => {
    setCurrentOption('--')
  }, [])

  const chooseOption = (event) => {
    click.play()
    props.filterAdventures(event.target.value)
    setCurrentOption(event.target.value)
  }
  
  const SearchOptions = () => {
    return adventureSearchTerms.map(term => {
      return <option value={term} key={term}>{term}</option>
    })
  }

  return (
    <section className="adventure-filter">
      <h2>Filter by a keyword</h2>
      <select 
        onChange={chooseOption} 
        onMouseOver={() => tick.play()}
        onClick={() => click.play()}
      >
        <option value={currentOption} key={currentOption}>{currentOption}</option>
        <SearchOptions/>
      </select>
    </section>
  )
}

export default AdventureFilter