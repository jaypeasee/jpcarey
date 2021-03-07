import React, {Component} from 'react'
import './App.scss';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'
import Adventures from '../Adventures/Adventures/Adventures'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      home: true,
      contact: false,
      resume: false,
      adventures: false,
      title: "home"
    }
  }

  toggleNav = (view) => {
    this.setState({
      home: false,
      contact: false,
      resume: false,
      adventures: false,
      [view]: true,
      title: view
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          home={this.state.home}
          contact={this.state.contact}
          resume={this.state.resume}
          adventures={this.state.adventures}
          toggleNav={this.toggleNav}
          title={this.state.title}
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
          <Route 
            exact
            path="/resume"
            render={() => {
              return (
                <Resume />
              )
            }}
          />
          <Route 
            exact
            path="/adventures"
            render={() => {
              return (
                <Adventures />
              )
            }}
          />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
