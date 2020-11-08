import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
    margin: "auto"
  };

  const checkmarkStyle = {
    maxWidth: "100%",
    width: "200px",
    gridRow: "1",
  };

  const checkmarkText = {
    gridRow: "2",
    textAlign: "center",
    paddingTop: "20px",
    fontSize: "30px",
  }

  const shoppingCartContainerStyle = {
    margin: "auto",
    gridColumn: "2", 
    padding: "10px"
  }

  const orderCardStyle = {
    borderRadius: "5px",
    color: "black",
    padding: "5px",
    margin: "auto",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const ulStyle = {
    listStyleType: "none",
    padding: "0",
    marginTop: "15px"
  }

  const priceStyle = {
    margin: "auto", 
    borderBottom: "1px solid grey"
  }

  const payStyle = {
    backgroundColor: "black", 
    color: "white", 
    width: "100%", 
    textAlign: "center", 
    padding: "10px 0px", 
    borderRadius:"5px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const payVippsStyle = {
    backgroundColor: "#FF4B00", 
    color: "white", 
    width: "100%", 
    textAlign: "center", 
    padding: "10px 0px", 
    borderRadius: "5px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }


  const orderFinishedStyle = {
    margin: "auto",
    gridColumn:"2",
    gridRow:"2",
    display: "grid"
  }

  const checkmarkTextContainer = {
    display: "grid",
    gridTemplateRows: "auto auto",
    padding: "50px 0px",
    justifyItems: "center"
  }

  const stylebtn = {
    textAlign: "center",
    backgroundColor: "White",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
    margin: "5px",
    color: "black",
    padding: "20px 0px"
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
      <div className="shopping-cart-container-style" style={shoppingCartContainerStyle}>
        <h4 className="order-style">Fullfør din bestilling:</h4>
        {orders.length > 0 && <ul style={ulStyle}>{orderList}</ul>}
        {orders.length === 0 && <p>Ingen varer lagt til</p>}

        <LocationSelector
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <p style= {priceStyle}>{`Totalpris: ${getTotalPrice()}`}</p><br/>
        <div className="pay-style" style={payStyle} onClick={confirmOrder}>Betal</div><br/>
        <div className="pay-vipps-style" style={payVippsStyle}>Betal med Vipps</div>
      </div>
    );
  } else {
    return (
      <div style={orderFinishedStyle}>
        <div className="checkmarkTextContainer" style={checkmarkTextContainer}>
          <img className="checkmark-style" src={checkmarkImage} style={checkmarkStyle} alt="Checkmark"></img>
          <p className="checkmark-text-style" style={checkmarkText}>Takk for din bestilling</p>
        </div>
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