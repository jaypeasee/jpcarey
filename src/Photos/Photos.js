import React, { Component } from 'react'
import './Photos.scss'
import shoshoneOpening from './ynpShoshone/shoshoneOpening.jpeg'
import yurtMorning from './commissaryRidge/yurtMorning.jpeg'
import sunsetSummit from './hokkaido/sunsetSummit.jpeg'
import nankoweep from './grandCanyon/nankoweep.JPG'
import yurtOverlook from './baldyKnoll/yurtOverlook.jpg'
import moment from 'moment';
import { comma } from 'number-magic'

class Photos extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    calculateTimeDiff = (date) => {
        return `${comma(moment().diff(date, "days"))} days ago`
    }

    render() {
        return (
            <section className="photos-section">
                <div className="library-title-bar">
                    <h2>Photos Library</h2>
                </div>
                <section className="adventure-library">
                    <section 
                        className="adventure-cover"
                        role="button"
                    >
                    <img 
                        src={shoshoneOpening}
                        alt="Opening of Shoshone Lake from Lewis Creek"
                        className="adventure-img-cover"
                    />
                    <h3>Shoshone Canoe Trip</h3>
                    <h4>Yellowstone National Park</h4>
                    <h4>3 Days</h4>
                    <h4>{`August, 2020 (${this.calculateTimeDiff("20201021", "YYYYMMDD")})`}</h4>
                </section>
                    <section 
                        className="adventure-cover"
                        role="button"
                    >
                        <img 
                            src={yurtMorning}
                            alt="Baldy Knoll Yurt"
                            className="adventure-img-cover"
                        />
                        <h3>Commissary Ridge Yurt Trip</h3>
                        <h4>Alta, Wyoming</h4>
                        <h4>3 Days</h4>
                        <h4>{`January, 2020 (${this.calculateTimeDiff("20200110", "YYYYMMDD")})`}</h4>
                    </section>
                    <section 
                        className="adventure-cover"
                        role="button"
                    >
                        <img 
                            src={sunsetSummit}
                            alt="Sunset in Niseko"
                            className="adventure-img-cover"
                        />
                        <h3>Hokkaido Ski Trip</h3>
                        <h4>Hokkaido, Japan</h4>
                        <h4>15 days</h4>
                        <h4>{`January, 2019 (${this.calculateTimeDiff("20190121", "YYYYMMDD")})`}</h4>
                    </section>
                    <section 
                        className="adventure-cover"
                        role="button"
                    >
                        <img 
                            src={nankoweep}
                            alt="Nankoweep Overlook"
                            className="adventure-img-cover"
                        />
                        <h3>Grand Canyon Raft Trip</h3>
                        <h4>Grand Canyon National Park</h4>
                        <h4>21 days</h4>
                        <h4>{`April, 2018 (${this.calculateTimeDiff("20180401", "YYYYMMDD")})`}</h4>
                    </section>
                    <section 
                        className="adventure-cover"
                        role="button"
                    >
                        <img 
                            src={yurtOverlook}
                            alt="Looking down on the Baldy Knoll Yurt"
                            className="adventure-img-cover"
                        />
                        <h3>Baldy Knoll Yurt Trip</h3>
                        <h4>Alta, Wyoming</h4>
                        <h4>3 Days</h4>
                        <h4>{`January, 2018 (${this.calculateTimeDiff("20180121", "YYYYMMDD")})`}</h4>
                    </section>
                </section>
            </section>
        )
    }
}

export default Photos;