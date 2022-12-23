import React, { useState, useEffect } from 'react'
import './Home.scss'
import { photosOfMe } from './homeImages/imgImports';

const Home = () => {
  
  const [currentProfilePic, setCurrentProfilePic] = useState('')
  const [allProfilePics, setAllProfilePics] = useState(photosOfMe)
  
  useEffect(() => {
    updateRandomProfileImg()
  }, [])

  const updateRandomProfileImg = () => {
    if (!allProfilePics.length) {
      setAllProfilePics(photosOfMe)
    } else {
        const randomImg = allProfilePics[Math.floor(Math.random() * allProfilePics.length)]
        setCurrentProfilePic(randomImg)  
        setAllProfilePics(allProfilePics.filter(img => {
          return img !== randomImg
        }))
    }
  }

    return (
      <section className="profile-img-section">
        <img 
          src={currentProfilePic}
          alt="profile image of me"
          className="profile-img"
          onClick={() => {
            updateRandomProfileImg()
          }}
        />
      </section>
    )
}

export default Home