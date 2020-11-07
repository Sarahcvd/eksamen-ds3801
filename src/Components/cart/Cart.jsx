import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderCard from "./OrderCard";
import { OrderContext } from "../../orderContext";
import { HistoryContext } from "../../historyContext";
import LocationSelector from "../selectors/LocationSelector";
import logoImage from "../../images/logo.png";
import checkmarkImage from "../../images/checkmark.png";

const Cart = (props) => {
  //useState and props products/setProducts
  const [selectedLocation, setSelectedLocation] = useState("sitt her");
  const { orders, setOrders } = useContext(OrderContext);
  const { orderHistory, setOrderHistory } = useContext(HistoryContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function getTotalPrice() {
    var price = 0;
    orders.forEach((order) => {
      price += order.price * order.count;
    });
    return price;
  }

  const logoStyle = {
    maxWidth: "50%",
    
  };

  const checkmarkStyle = {
    maxWidth: "30%",
    gridColumn: "1",
  };

  const shoppingCartContainerStyle = {
    margin: "auto",
    width: "100%", 
    gridColumn: "1 /span 2", 
    padding: "10px"
  }

  const orderCardStyle = {
    borderRadius: "5px",
    color: "black",
    padding: "5px",
    margin: "15px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const ulStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0"
  }
  const priceStyle = {
    margin: "auto"
  }

  const payStyle = {
    backgroundColor: "black", 
    color: "white", 
    width: "100%", 
    textAlign: "center", 
    padding: "10px", 
    borderRadius:"5px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const payVippsStyle = {
    backgroundColor: "#FF4B00", 
    color: "white", 
    width: "100%", 
    textAlign: "center", 
    padding: "10px", 
    borderRadius: "5px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const orderhistorystyle = {
    margin: "auto",
    gridColumn:" 3 ",
    gridRow:"4"
  
  }

  const stylebtn = {

    textDecoration: "none",
    gridColumn: "1",
    textAlign: "center",
    height: "50px",
    with: "50px",
    backgroundColor: "White",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    padding: "5px",
    margin: "5px",

  }

  const linkstyle = {

    textDecoration: "none",
  }


  function confirmOrder() {
    setOrderConfirmed(true);
    const newOrderHistory = {
      date: new Date(),
      orderData: orders,
    };
    console.log(orderHistory);
    setOrderHistory((prevValue) => [...prevValue, newOrderHistory]);
    setOrders([]);
  }

  const orderList = orders.map((order) => (
    <li 
      style={orderCardStyle} 
      key={`${order.id}-${order.size}`}
    >{<OrderCard data={order} />}</li>
  ));

  if (!orderConfirmed) {
    return (
      <div style={shoppingCartContainerStyle}>
        <h4>Fullfør din bestilling:</h4>
        {orders.length > 0 && <ul style={ulStyle}>{orderList}</ul>}
        {orders.length === 0 && <p>Ingen varer lagt til</p>}

        <LocationSelector
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <p style= {priceStyle}>{`Totalpris: ${getTotalPrice()}`}</p>
        <div style={payStyle} onClick={confirmOrder}>Betal</div>
        <div style={payVippsStyle}>Betal med Vipps</div>
      </div>
    );
  } else {
    return (
      <div style={orderhistorystyle}>
        <img src={logoImage} style={logoStyle}></img> 
        <p>Takk for din bestilling</p>
        <img src={checkmarkImage} style={checkmarkStyle}></img>
        <Link to={"/"} style={linkstyle}>
          <p style={stylebtn}>Tilbake til forsiden</p>
        </Link>
        <Link to={"/History"} style={linkstyle}>
          <p style={stylebtn}>Se orderehistorikk</p>
        </Link>
      </div>
    );
  }
};

//Export module
export default Cart;