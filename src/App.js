
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/pages/homePage';
import About from './Components/pages/aboutPage';
import Projects from './Components/pages/projectsPage'

//includes
import './Assets/css/default.min.css';

  class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
            <Header />
              <Route exact path='/' component={HomePage} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Projects' component={Projects} />
            <Footer />
          </div>
        </Router>
      );
  }  
}


export default App;
