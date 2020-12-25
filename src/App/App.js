import React, {Component} from 'react'
import './App.scss';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Home />
      </React.Fragment>
    )
  }
}

export default App;
