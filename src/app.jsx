import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/category-overview/Category";
import Product from "./Components/Product";
import Cart from "./Components/cart/Cart";
import OrderHistory from "./Components/order-history/OrderHistory";
import { hotDrinks, coldDrinks, desserts } from "./productList";
import { OrderContext } from "./orderContext";
import { HistoryContext } from "./historyContext";
import Sidebar from "./Components/sidebar/Sidebar";
import "./Sidebar.css";

const App = (props) => {
  const headerStyle = {
    margin: "0",
    gridRow: "1",
    gridColumn: "1 /span 3",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    fontWeight: "bold",
    backgroundColor: "#815757", 
    width: "100%"
  }

  const headerTitleStyle = {
    textAlign: "center",
    gridColumn: "2",
    fontSize: "30px",
    color: "white",
  }

  const homeLinkStyle = {
    textDecoration: "none",     
  }
  
  //useState and props products/setProducts

  const [orders, setOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const providerValue = useMemo(() => ({ orders, setOrders }), [
    orders,
    setOrders,
  ]);

  const historyValue = useMemo(() => ({ orderHistory, setOrderHistory }), [
    orderHistory,
    setOrderHistory,
  ]);

  return (
    <Router>
      {/*accepts values to be passed to ShoppingCart*/}
      <header style={headerStyle}>
        <Sidebar outerContainerId={'root'} />
        {/*Title*/}
        <a href="/" style={homeLinkStyle}> <h1 style={headerTitleStyle}>leCafé </h1></a> 
      </header>

      {/*Switch route path*/}
      <Switch>
        <OrderContext.Provider value={providerValue}>
          <HistoryContext.Provider value={historyValue}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/History">
              <OrderHistory />
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
          </HistoryContext.Provider>
        </OrderContext.Provider>
      </Switch>
    </Router>
  );
};

//Export module
export default App;