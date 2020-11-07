import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrderHistoryCard from "./OrderHistoryCard";
import { HistoryContext } from "../../historyContext";

const OrderHistory = (props) => {
  //useState and props products/setProducts
  const { orderHistory } = useContext(HistoryContext);

  console.log(orderHistory);
  const orderListStyle = {
    width: "50px", 
    height: "50px",
    backgroundColor: "black", 
  }
  const orderHistoryList = orderHistory.map((order) => (
    <li 
      style={orderListStyle}
      key={order.date.toString()}>{<OrderHistoryCard data={order} />}</li>
  ));

  return (
    <div>
      {orderHistoryList}
      <Link to={"/"}>
        <button>forsiden</button>
      </Link>
    </div>
  );
};

//Export module
export default OrderHistory;