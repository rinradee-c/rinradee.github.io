import React from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import Navitems from './components/nav/Navitems'
import Nav from './components/nav/Nav'

//contents
import Header from './contents/header/header'
import About from './contents/about/About'
import Education from './contents/Education/Education'
import Experience from './contents/experience/Experience'
import Contact from './contents/contact/Contact'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Education/>
        <Experience />
        <Contact />
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
