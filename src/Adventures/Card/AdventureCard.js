import React, { useState, useEffect } from 'react'
import './AdventureCard.scss'
import moment from 'moment';
import { comma } from 'number-magic'

const AdventureCard = (props) => {
  const { tripName, location, days, exactDate, roughDate, photos } = props
  
  const calculateTimeDiff = (date) => {
    return `${comma(moment().diff(date, "days"))} days ago`
  }
  
  return (
    <section 
      className="adventure-cover"
    >
      <img 
        src={photos[0]}
        alt={`Photo from ${tripName}`}
        className="adventure-img-cover"
      />
      <h3>{tripName}</h3>
      <h4>{location}</h4>
      <h4>{days} days</h4>
      <h4>{`${roughDate} (${calculateTimeDiff(exactDate, "YYYYMMDD")})`}</h4>
    </section>
  )
}

export default AdventureCard