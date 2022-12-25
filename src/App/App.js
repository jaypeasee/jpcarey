import React, { useState } from 'react'
import './App.scss';
import NavBar from '../NavBar/NavBar/NavBar.jsx'
import Home from '../Home/Home.jsx'
import Contact from '../Contact/Contact/Contact.jsx'
import Resume from '../Resume/Resume/Resume.jsx'
import Adventures from '../Adventures/Container/AdventuresContainer.jsx'
import Error from '../Error/Error.jsx'
import { Route, Switch } from 'react-router-dom'

const App = () =>  {
  const [pageView, setPageView] = useState({
    home: true,
    contact: false,
    resume: false,
    adventures: false,
    title: "home"
  })

  const toggleNav = (view) => {
    setPageView({
      home: false,
      contact: false,
      resume: false,
      adventures: false,
      [view]: true,
      title: view
    })
  }

  return (
    <React.Fragment>
      <NavBar 
        home={pageView.home}
        contact={pageView.contact}
        resume={pageView.resume}
        adventures={pageView.adventures}
        toggleNav={toggleNav}
        title={pageView.title}
      />
      <Switch>
        <Route 
          exact 
          path="/"
          render={() => <Home/>}
        />
        <Route 
          exact
          path="/contact"
          render={() => <Contact/>}
        />
        <Route 
          exact
          path="/resume"
          render={() => <Resume />}
        />
        <Route 
          exact
          path="/adventures"
          render={() => <Adventures />}
        />
        <Route 
          path='/'
          render={() => <Error/>}
        />
      </Switch>
    </React.Fragment>
  )
}

export default App;