import React, {Component} from 'react'
import './Home.scss'
import billsGame from '../images/billsGame.jpeg'
import familyPhoto from '../images/familyPhoto.jpeg'
import japanIcicle from '../images/japanIcicle.jpeg'
import mexicoPelican from '../images/mexicoPelican.jpeg'
import nileSpecial from '../images/nileSpecial.jpeg'
import pathfinderCanoe from '../images/pathdinderCanoe.jpeg'
import wendyTetons from '../images/wendyTetons.jpeg'
import yurtSkinning from '../images/yurtSkinning.jpeg'
import tetonsBackside from '../images/tetonsBackside.jpeg'
import frontPage from '../images/frontPage.jpeg'
import severnRiver from '../images/severnRiver.jpg'
import westKelly from '../images/westKelly.jpg'
import bigKahuna from '../images/bigKahuna.JPG'
import ftowStradle from '../images/ftowStradle.jpg'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            allProfilePics: [
                billsGame,
                familyPhoto,
                japanIcicle,
                mexicoPelican,
                nileSpecial,
                pathfinderCanoe,
                wendyTetons,
                yurtSkinning,
                tetonsBackside,
                frontPage,
                severnRiver,
                westKelly,
                bigKahuna,
                ftowStradle
            ],
            currentProfilePic: "",
        }
    }

    componentDidMount() {
        this.updateRandomProfileImg()
    }

    updateRandomProfileImg = () => {
        if (!this.state.allProfilePics.length) {
            this.resetImgList()
        } else {
            const randomImg = this.state.allProfilePics
                [Math.floor(Math.random() * this.state.allProfilePics.length)]
            this.setState({
                currentProfilePic: randomImg,
                allProfilePics: this.state.allProfilePics.filter(img => {
                    return img !== randomImg
                })
            })
        }
    }

    resetImgList = () => {
        this.setState({
            allProfilePics: [
                billsGame,
                familyPhoto,
                japanIcicle,
                mexicoPelican,
                nileSpecial,
                pathfinderCanoe,
                wendyTetons,
                yurtSkinning,
                tetonsBackside,
                frontPage,
                severnRiver,
                westKelly,
                bigKahuna,
                ftowStradle
            ],
        })
    }

    render() {
        return (
            <section className="profile-img-section">
                <img 
                    src={this.state.currentProfilePic}
                    alt="profile image of me"
                    className="profile-img"
                    onClick={this.updateRandomProfileImg}
                />
            </section>
        )
    }
}

export default Home