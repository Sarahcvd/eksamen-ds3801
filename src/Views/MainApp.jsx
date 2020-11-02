import React, { useState } from 'react';
import MainPage from './MainPage/MainPage';
import MainMenu from './Menu/MainMenu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {ShoppingCart} from '../ShoppingCart';
import {Cart} from './Cart';

const MainApp = (props) => {
  //useState and props products/setProducts
  const [products, setProducts] = useState({});
  return (
    <Router>
      {/*accepts values to be passed to ShoppingCart*/}
      <ShoppingCart.Provider value={{products, setProducts}}>
        <header id="header-container">
          {/*Title*/}
          <h1 id="header-title">leCafé</h1>
        </header>
          {/*Links to MainMenu and MainPage*/}
        <Link id="front-page-link" to="/MainPage/MainPage">Front Page</Link>
        <Link id="shopping-cart-link" to="/Cart">Shopping Cart</Link>
        
        {/*Switch route path*/}
        <Switch>
          <Route exact path='/MainMenu/:area?' component={MainMenu}/>
          <Route exact path='/Cart/' component={Cart} />
          <Route component={MainPage} />
        </Switch>
      </ShoppingCart.Provider>
    </Router>
  );
};

//Export module
export default MainApp;