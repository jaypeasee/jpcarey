import React, {Component} from 'react'
import './Home.scss'
import billsGame from './images/billsGame.jpeg'
import familyPhoto from './images/familyPhoto.jpeg'
import japanIcicle from './images/japanIcicle.jpeg'
import mexicoPelican from './images/mexicoPelican.jpeg'
import nileSpecial from './images/nileSpecial.jpeg'
import pathfinderCanoe from './images/pathdinderCanoe.jpeg'
import wendyTetons from './images/wendyTetons.jpeg'
import yurtSkinning from './images/yurtSkinning.jpeg'
import tetonsBackside from './images/tetonsBackside.jpeg'
import frontPage from './images/frontPage.jpeg'
import severnRiver from './images/severnRiver.jpg'
import bigKahuna from './images/bigKahuna.JPG'
import ftowStradle from './images/ftowStradle.jpg'
import feelGood from './images/feelGood.jpg'
import severnMars from './images/severnMars.jpg'
import windigoCar from './images/windigoCar.jpg'
import japanVan from './images/japanVan.jpeg'
import furanoSkin from './images/furanoSkin.JPG'
import topoDuo from './images/topoDuo.JPG'
import UIfx from 'uifx'
import btnClick from '../Sounds/btnClick.mp3'


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
                bigKahuna,
                ftowStradle,
                feelGood,
                severnMars,
                windigoCar,
                topoDuo,
                furanoSkin,
                japanVan
            ],
            currentProfilePic: "",
        }
        this.click = new UIfx(btnClick, {
            volume: .1
        })
    }

    componentDidMount() {
        this.updateRandomProfileImg()
    }

    updateRandomProfileImg = () => {
        if (this.state.currentProfilePic) {
            this.click.play();
        }
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
                bigKahuna,
                ftowStradle,
                feelGood,
                severnMars,
                windigoCar,
                topoDuo,
                furanoSkin,
                japanVan
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