import React, {Component} from 'react'
import './App.scss';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      home: true,
      contact: false,
      resume: false,
      photos: false,
      music: false
    }
  }

  toggleNav = (view) => {
    console.log(view)
    this.setState({
      home: false,
      contact: false,
      resume: false,
      photos: false,
      music: false,
      [view]: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          home={this.state.home}
          contact={this.state.contact}
          resume={this.state.resume}
          photos={this.state.photos}
          music={this.state.music}
          toggleNav={this.toggleNav}
        />
        <Switch>
          <Route 
            exact 
            path="/"
            render={() => {
                return (
                    <Home/>
                )
              }}
          />
          <Route 
            exact
            path="/contact"
            render={() => {
              return (
                <Contact />
              )
            }}
          />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
