import React, { Component } from 'react'
import './AdventureCard.scss'
import moment from 'moment';
import { comma } from 'number-magic'
import { click } from '../../sounds/sounds';

class AdventureCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: this.props.photos
    }
  }

  calculateTimeDiff = (date) => {
    return `${comma(moment().diff(date, "days"))} days ago`
  }

  rotatePhoto = () => {
    click.play()
    if (this.state.photos.length === 1) {
      this.setState({
        photos: this.props.photos
      })
    } else {
      this.setState({
        photos: this.state.photos.slice(1)
      })
    }
  }

  render() {
    const { tripName, location, days, exactDate, roughDate } = this.props
    return (
      <section 
        className="adventure-cover"
        role="button"
        onClick={this.rotatePhoto}
      >
        <img 
            src={this.state.photos[0]}
            alt={`Photo from ${tripName}`}
            className="adventure-img-cover"
        />
        <h3>{tripName}</h3>
        <h4>{location}</h4>
        <h4>{days} days</h4>
        <h4>{`${roughDate} (${this.calculateTimeDiff(exactDate, "YYYYMMDD")})`}</h4>
      </section>
    )
  }
}

export default AdventureCard