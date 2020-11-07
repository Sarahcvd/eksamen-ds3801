import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrderHistoryCard from "./OrderHistoryCard";
import { HistoryContext } from "../../historyContext";

const OrderHistory = (props) => {
  //useState and props products/setProducts
  const { orderHistory } = useContext(HistoryContext);

  console.log(orderHistory);
  const orderListStyle = {
    listStyleType: "none",
    margin: "auto", 
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
    padding: "0px 5px"
  }

  const containerStyle = {
    gridColumn: "1 /span 3",
    margin: "10px"
  }

  const coverStyle = {
    backgroundColor: "#815757",
    width: "100px",
    height: "60px",
    padding: "5px",
    position: "absolute",
    top: "-20px", 
    left: "-0px"
  }
  
  const orderHistoryList = orderHistory.map((order) => (
    <li 
      style={orderListStyle}
      key={order.date.toString()}>{<OrderHistoryCard data={order} />}</li>
  ));

  return (
    <div style={containerStyle}>
      <p style={coverStyle}></p>
      {orderHistoryList}
      <Link to={"/"}>
        <button>forsiden</button>
      </Link>
    </div>
  );
};

//Export module
export default OrderHistory;