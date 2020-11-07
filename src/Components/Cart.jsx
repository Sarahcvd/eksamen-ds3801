import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderCard from "./OrderCard";
import CartSummaryBar from "./CartSummaryBar";
import { OrderContext } from "../orderContext";
import LocationSelector from "./selectors/LocationSelector";

const Cart = (props) => {
  //useState and props products/setProducts
  const [selectedLocation, setSelectedLocation] = useState("sitt her");
  const { orders } = useContext(OrderContext);

  console.log(orders);

  function getTotalPrice() {
    var price = 0;
    orders.forEach((order) => {
      price += order.price * order.count;
    });
    return price;
  }

  const shoppingCartContainerStyle = {
    margin: "auto",
    width: "100%", 
    gridColumn: "1 /span 2"
  }

  const orderCardStyle = {
    listStyleType: "none",
    borderRadius: "5px",
    color: "black",
    padding: "5px",
    margin: "5px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const orderList = orders.map((order) => (
    <li style={orderCardStyle} key={`${order.id}-${order.size}`}>{<OrderCard data={order} />}</li>
  ));

  return (
    <div style={shoppingCartContainerStyle}>
      {orders.length > 0 && <ul>{orderList}</ul>}
      {orders.length === 0 && <p>Ingen varer lagt til</p>}

      <LocationSelector
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <p>{`Totalpris: ${getTotalPrice()}`}</p>
      <button>Betal</button>
      <button>Betal med Vipps</button>
    </div>
  );
};

//Export module
export default Cart;