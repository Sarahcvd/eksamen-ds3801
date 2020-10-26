import React from 'react';
import MainMenu from './MainMenu';
import MainPage from './MainPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const MainApp = (props) => {
  return(
    <Router>
      <header id="header-container">
        <h1 id="header-title">leCafé</h1>
        <img/> {/* FINN ET BILDE */}
      </header>
      <Link to="/MainMenu">Main Menu</Link>
      <Link to="/MainPage"></Link>

      <Switch>
        <Route path="/MainMenu" component={MainMenu}/>
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  )
}


export default MainApp;