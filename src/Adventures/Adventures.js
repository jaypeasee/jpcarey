import React, { Component } from 'react'
import './Adventures.scss'
import AdventureCard from '../AdventureCard/AdventureCard'
import {
    shoshonePics,
    commissaryPics, 
    hokkaidoPics, 
    gcPics, 
    baldyPics, 
    severnPics, 
    asheweigPics, 
    dumoinePics,
    missinaibiPics,
    mistassibiPics,
    petPics,
    rupertPics,
    mainSalmonPics
} from './imgImports.js'


class Adventures extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <section className="photos-section">
                <section className="adventure-library">
                    <AdventureCard 
                        tripName="Shoshone Canoe Trip"
                        location="Yellowstone National Park, Wyoming"
                        photos={shoshonePics}
                        days="3"
                        exactDate="20201021"
                        roughDate="August, 2020"
                    />
                    <AdventureCard 
                        tripName="Commissary Ridge Yurt Trip"
                        location="Bridger Teton National Forest, Wyoming"
                        photos={commissaryPics}
                        days="3"
                        exactDate="20200110"
                        roughDate="January, 2020"
                    />
                    <AdventureCard 
                        tripName="Hokkaido Ski Trip"
                        location="Hokkaido, Japan"
                        photos={hokkaidoPics}
                        days="14"
                        exactDate="20190121"
                        roughDate="January, 2019"
                    />
                    <AdventureCard 
                        tripName="Grand Canyon Raft Trip"
                        location="Grand Canyon National Park, Arizona"
                        photos={gcPics}
                        days="21"
                        exactDate="20180401"
                        roughDate="April, 2018"
                    />
                    <AdventureCard 
                        tripName="Baldy Knoll Yurt Trip"
                        location="Bridger Teton National Forest, Wyoming"
                        photos={baldyPics}
                        days="4"
                        exactDate="20180121"
                        roughDate="January, 2018"
                    />
                    <AdventureCard 
                        tripName="Main Salmon Raft Trip"
                        location="Salmon-Challis National Forest, Idaho"
                        photos={mainSalmonPics}
                        days="5"
                        exactDate="20160910"
                        roughDate="September, 2016"
                    />
                    <AdventureCard 
                        tripName="Severn River Canoe Trip"
                        location="Fort Severn, Ontario"
                        photos={severnPics}
                        days="37"
                        exactDate="20150705"
                        roughDate="July, 2015"
                    />
                    <AdventureCard 
                        tripName="Dumoine River Canoe Trip"
                        location="Laniel, Quebec"
                        photos={dumoinePics}
                        days="14"
                        exactDate="20140705"
                        roughDate="July, 2014"
                    />
                    <AdventureCard 
                        tripName="Asheweig River Canoe Trip"
                        location="Peawanuck, Ontario"
                        photos={asheweigPics}
                        days="32"
                        exactDate="20130709"
                        roughDate="July, 2013"
                    />
                    <AdventureCard 
                        tripName="Mistassibi River Canoe Trip"
                        location="Dolbeau-Mistassini, Quebec"
                        photos={mistassibiPics}
                        days="6"
                        exactDate="20120520"
                        roughDate="May, 2012"
                    />
                    <AdventureCard 
                        tripName="Petawawa River Canoe Trip"
                        location="Algonquin Park, Ontario"
                        photos={petPics}
                        days="10"
                        exactDate="20110815"
                        roughDate="August, 2011"
                    />
                    <AdventureCard 
                        tripName="Missinaibi River Canoe Trip"
                        location="Moosonee, Ontario"
                        photos={missinaibiPics}
                        days="19"
                        exactDate="20110703"
                        roughDate="July, 2011"
                    />
                    <AdventureCard 
                        tripName="Rupert River Canoe Trip"
                        location="Waskaganish, Quebec"
                        photos={rupertPics}
                        days="25"
                        exactDate="20080714"
                        roughDate="July, 2008"
                    />
                </section>
            </section>
        )
    }
}

export default Adventures;