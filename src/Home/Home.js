import React, {Component} from 'react'
import './Home.scss'
import { photosOfMe } from './homeImages/imgImports';
import UIfx from 'uifx'
import btnClick from '../sounds/btnClick.mp3'
import btnTick from '../sounds/btnTick.mp3'

class Home extends Component {
  constructor() {
    super()
    this.state = {
        allProfilePics: photosOfMe,
        currentProfilePic: "",
    }
    this.click = new UIfx(btnClick, {
        volume: .1
    })
    this.tick = new UIfx(btnTick, {
        volume: .1
    })
  }

  componentDidMount() {
    this.updateRandomProfileImg()
  }

  updateRandomProfileImg = () => {
    this.click.play();
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
      allProfilePics: photosOfMe,
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
          onMouseOver={() => this.tick.play()}
        />
      </section>
    )
  }
}

export default Home