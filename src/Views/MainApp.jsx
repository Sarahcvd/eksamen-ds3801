import React, { useState } from 'react';
import MainMenu from './MainMenu';
import MainPage from './MainPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {ShoppingCart} from './ShoppingCart';

const MainApp = (props) => {
  //useState and props products/setProducts
  const [products, setProducts] = useState({});
  return (
    <Router>
      {/*accepts values to be passed to ShoppingCart*/}
      <ShoppingCart.Provider value={{products, setProducts}}>
        {/*Title*/}
      <header id="header-container">
        <h1 id="header-title">leCafé</h1>
        {/*Links to MainMenu and MainPage*/}
      </header>
      <Link to="/MainMenu">Main Menu</Link>
      <Link to="/MainPage">Main Page</Link>
      
      {/*Switch route path*/}
      <Switch>
        <Route exact path='/MainMenu/:area?' component={MainMenu}/>
        <Route exact path='/ShoppingCart/:area?' component={MainMenu} />
        <Route exact path="/" component={MainPage} />
      </Switch>
      </ShoppingCart.Provider>
    </Router>
  );
};

//Export module
export default MainApp;