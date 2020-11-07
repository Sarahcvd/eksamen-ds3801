import React, { useEffect, useState, useContext } from "react";
import { OrderContext } from "../orderContext";
import { Link } from "react-router-dom";

const OrderCard = (props) => {
  //useState and props products/setProducts
  //   const [count, setCount] = useState(0);
  const { orders, setOrders } = useContext(OrderContext);

  //   useEffect(() => {
  //     setCount(props.data.count);
  //   }, [props.data]);

  function increaseCount() {
    var newOrder = {
      count: props.data.count + 1,
      size: props.data.size,
      type: props.data.type,
      price: props.data.price,
      name: props.data.name,
      id: props.data.id,
    };

    updateContext(newOrder);
  }

  function decreaseCount() {
    var newOrder = {
      count: props.data.count - 1,
      size: props.data.size,
      type: props.data.type,
      price: props.data.price,
      name: props.data.name,
      id: props.data.id,
    };

    updateContext(newOrder);
  }

  function updateContext(newOrder) {
    var newOrderList = [];

    orders.forEach((order) => {
      if (
        order.size === props.data.size &&
        order.id === props.data.id &&
        order.type === props.data.type
      ) {
        newOrderList.push(newOrder);
      } else {
        newOrderList.push(order);
      }
    });

    setOrders(newOrderList);
  }

  return (
    <div id="test">
      <div>{props.data.name}</div>
      <div>{`${props.data.size} | kr ${
        props.data.price * props.data.count
      };-`}</div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <p>{props.data.count}</p>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
};

//Export module
export default OrderCard;