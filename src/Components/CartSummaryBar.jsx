import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../orderContext";

const CartSummaryBar = (props) => {
  const { orders, setOrders } = useContext(OrderContext);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState("");

  const CartSummaryBarStyling = {
    position: "fixed",
    backgroundColor: "#AC6E6E", 
    color: "white",
    bottom: "0", 
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    width: "100%",
    padding: "0px 10px"
  }

  const summaryCountStyle = {
    backgroundColor: "white",
    color: "#AC6E6E",
    width: "fit-content",
    padding: "5px 10px", 
    borderRadius: "5px"
  }

  const summaryTextStyle = {
    padding: "5px"
  }

  useEffect(() => {
    var count = 0;
    var price = 0;

    orders.forEach((order) => {
      price += order.price * order.count;
      count += order.count;
    });

    setItemCount(count);
    setTotalPrice(`kr ${price},-`);
  }, [orders]);

  return (
    <Link to={"/Cart"}>
      <div style={CartSummaryBarStyling}>
        <p style={summaryCountStyle}>{itemCount}</p>
        <p style={summaryTextStyle}>Se Din bestilling</p>
        <p style={summaryTextStyle}>{totalPrice}</p>
      </div>
    </Link>
  );
};

//Export module
export default CartSummaryBar;