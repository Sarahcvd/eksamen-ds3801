import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { hotDrinks, coldDrinks, desserts } from "./productList";
import { OrderContext } from "./orderContext";

const App = (props) => {
  const headerStyle = {
    margin: "0",
    gridRow: "1",
    gridColumn: "1 /span 3",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    fontWeight: "bold",
    backgroundColor: "#815757"
  }

  const headerTitleStyle = {
    textAlign: "center",
    gridColumn: "2 / span 1",
    color: "white",
    fontSize: "30px"
    color: "#AC6E6E",
  }

  const homeStyleLink = {
    textDecoration: "none"
  }

  //useState and props products/setProducts

  const [orders, setOrders] = useState([]);

  const providerValue = useMemo(() => ({ orders, setOrders }), [
    orders,
    setOrders,
  ]);

  return (
    <Router>
      {/*accepts values to be passed to ShoppingCart*/}
      <header style={headerStyle}>
        <a href="/"><p>Home</p></a>
        {/*Title*/}
        <a href="/" style={homeStyleLink}> <h1 style={headerTitleStyle}>leCafé </h1></a> 
      </header>

      {/*Switch route path*/}
      <Switch>
        <OrderContext.Provider value={providerValue}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/HotDrinks/">
            <Category productList={hotDrinks} />
          </Route>
          <Route exact path="/ColdDrinks/">
            <Category productList={coldDrinks} />
          </Route>
          <Route exact path="/Desserts/">
            <Category productList={desserts} />
          </Route>
          <Route path="/HotDrinks/:productId/">
            <Product productList={hotDrinks} />
          </Route>
          <Route path="/ColdDrinks/:productId/">
            <Product productList={coldDrinks} />
          </Route>
          <Route path="/Desserts/:productId/">
            <Product productList={desserts} />
          </Route>
        </OrderContext.Provider>
      </Switch>
    </Router>
  );
};

//Export module
export default App;