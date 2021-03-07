import "./AdventureFilyer.scss"
import { adventureSearchTerms } from '../AdventureData'
import UIfx from 'uifx'
import btnClick from '../../Sounds/btnClick.mp3'
import btnTick from '../../Sounds/btnTick.mp3'

const AdventureFilter = (props) => {
  const click = new UIfx(btnClick, {
    volume: .1
  })
  const tick = new UIfx(btnTick, {
    volume: .1
  })

  const chooseOption = (event) => {
    click.play()
    props.filterAdventures(event.target.value)
  }
  
  const renderSearchOptions = () => {
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
        {renderSearchOptions()}
      </select>
    </section>
  )
}

export default AdventureFilter