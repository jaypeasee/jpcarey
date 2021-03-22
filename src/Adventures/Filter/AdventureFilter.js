import "./AdventureFilter.scss"
import { adventureSearchTerms } from '../adventureData'
import { click, tick } from '../../sounds/sounds'

const AdventureFilter = (props) => {

  const chooseOption = (event) => {
    click.play()
    props.filterAdventures(event.target.value)
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
        <option value="">--</option>
        <SearchOptions/>
      </select>
    </section>
  )
}

export default AdventureFilter