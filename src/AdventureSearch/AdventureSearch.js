import React, {Component} from 'react'
import './AdventureSearch.scss'
import UIfx from 'uifx'
import btnClick from '../Sounds/btnClick.mp3'
import btnTick from '../Sounds/btnTick.mp3'

class AdventureSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        }
        this.tick = new UIfx(btnTick, {
            volume: .1
        })
        this.click = new UIfx(btnClick, {
            volume: .1
        })
    }

    updateInput = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    submitSearchTerm = (event) => {
        event.preventDefault()
        this.click.play()
        this.props.filterAdventures(this.state.searchTerm)
        this.setState({
            searchTerm: ""
        })
    }

    startLibraryReset = (event) => {
        event.preventDefault()
        this.click.play()
        this.setState({
            searchTerm: ""
        })
        this.props.resetAdventureLibrary()
    }

    render() {
        return (
            <form 
                className="adventure-search-form"
                onSubmit={this.submitSearchTerm}
            >
                <input 
                    className="adventure-search-input"
                    type="text"
                    value={this.state.searchTerm}
                    placeholder="filter by trip name or place"
                    name="searchTerm"
                    onChange={this.updateInput}
                    onMouseOver={() => this.tick.play()}
                    onClick={() => this.click.play()}
                />
                <div className="search-form-btns">
                    <button 
                        className="search-btn"
                        onMouseOver={() => this.tick.play()}
                        onClick={this.submitSearchTerm}
                    >Search</button>
                    
                    <button 
                        className="search-btn"
                        onMouseOver={() => this.tick.play()}
                        onClick={this.startLibraryReset}
                    >See All</button>
                </div>
            </form>
        )
    }
}

export default AdventureSearch