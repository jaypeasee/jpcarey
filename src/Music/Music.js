import React, {Component} from 'react'
import './Music.scss'
import Playlist from '../Playlist/Playlist'
import Podcast from '../Podcast/Podcast'
import UIfx from 'uifx'
import btnClick from '../Sounds/btnClick.mp3'
import btnTick from '../Sounds/btnTick.mp3'

class Music extends Component {
    constructor() {
        super()
        this.state = {
            toggled: true
        }
        this.tick = new UIfx(btnTick, {
            volume: .1
        })
        this.click = new UIfx(btnClick, {
            volume: .1
        })
    }

    toggleMusic = () => {
        this.click.play()
        this.setState({
            toggled: !this.state.toggled
        })
    }

    render() {
        return (
           <section className="music-section">
               {this.state.toggled &&
               <section className="all-playlists">
                    <div className="playlist-btn-container">
                        <button className="toggled-btn">Playlists</button>
                        <button 
                            className="untoggled-btn"
                            onClick={this.toggleMusic}
                            onMouseOver={() => this.tick.play()}
                        >Podcasts</button>
                    </div>
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/0MgiGMBqyka3eLitQwPuld"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/4PxwlVtvqtXidDaVYstBj6"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/6ULhDxmYGulvJqgJrWdB8U"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/1MgKLuKOtHCj1CPs1a3rDT"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/4LZyeDzikIkwji2EEysS6D"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/39YNlcHQsJHNBwJkLJpcgv"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/5UlzGYoxvBnorh5uAFtD9z"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/1BZPFsglwPBsVUq2SFPu30"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/3NM4kLAN7GP5MSUjH9h4VZ"
                />
                <Playlist 
                    link="https://open.spotify.com/embed/playlist/28IXBBYqtC5pK2oxbFpKgD"
                />
               </section>} 
               {!this.state.toggled &&
               <section className="all-podcasts">
                   <div className="podcast-btn-container">
                        <button 
                            className="untoggled-btn"
                            onClick={this.toggleMusic}
                            onMouseOver={() => this.tick.play()}
                        >Playlists</button>
                        <button className="toggled-btn">Podcasts</button>
                    </div>
                    <Podcast
                        link="https://open.spotify.com/embed-podcast/show/2LOJaYKijiwNefCvzczyib"
                    />
                    <Podcast 
                        link="https://open.spotify.com/embed-podcast/show/3m9c2ibJOYiigvVuswYSgU"
                    />
                    <Podcast 
                        link="https://open.spotify.com/embed-podcast/show/3IM0lmZxpFAY7CwMuv9H4g"
                    />
                    <Podcast 
                        link="https://open.spotify.com/embed-podcast/show/2PnWnDNwU3wKesCHCpy252"
                    />
                    <Podcast 
                        link="https://open.spotify.com/embed-podcast/show/2mTUnDkuKUkhiueKcVWoP0"
                    />
                    <Podcast 
                        link="https://open.spotify.com/embed-podcast/show/6YRZlXwzJed2ruOq9TCk7n"
                    />
                    <Podcast 
                        link="https://open.spotify.com/embed-podcast/show/7j9CZOPTcoVUVslvqKBu9x"
                    />
                    <Podcast 
                        link="https://open.spotify.com/embed-podcast/show/4LKZNYgHWlQe7jOIbgkVMz"
                    />
               </section>}
            </section>
        )
    }
}

export default Music