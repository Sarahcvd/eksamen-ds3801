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

  const orderList = orders.map((order) => (
    <li key={`${order.id}-${order.size}`}>{<OrderCard data={order} />}</li>
  ));

  return (
    <div>
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