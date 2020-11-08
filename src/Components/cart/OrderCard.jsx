import React, { useContext } from "react";
import { OrderContext } from "../../orderContext";
import "../../styles2.css"

const OrderCard = (props) => {
  //useState and props products/setProducts
  //   const [count, setCount] = useState(0);
  const { orders, setOrders } = useContext(OrderContext);


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

  const cardContainer = {
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto"
  }

  const buttonDivContainer = {
    margin: "auto",
    gridColumn: "3",
    gridRow: "1 /span 2",
    display: "grid",
    gridTemplateColumns: "auto auto auto", 
    gridGap: "5px"
  }

  const buttonStyle = {
    height: "fit-content",
    color: "#815757", 
    fontWeight: "bold",
    width: "15px"
  }

  const cardTextStyle = {
    padding: "10px",
    gridRow: "1",
    gridColumn: "2"
  }

  const cardSizeText = {
    padding: "10px",
    gridRow: "2", 
    gridColumn: "2", 
    color: "grey"
  }

  const countStyle = {
    backgroundColor: "#815757",
    color: "white",
    padding: "3px 10px",
    borderRadius: "5px"
  }


  return (
    <div id="card-container" style={cardContainer}>
      <div id="card-text-style" style={cardTextStyle}>{props.data.name}</div>
      <div id="card-size-text" style={cardSizeText}>{`${props.data.size} | kr ${
        props.data.price * props.data.count
      },-`}</div>
      <div style={buttonDivContainer}>
        <p className="button-style" style={buttonStyle} onClick={decreaseCount}>-</p>
        <p style={countStyle}>{props.data.count}</p>
        <p style={buttonStyle} onClick={increaseCount}>+</p>
      </div>
    </div>
  );
};

//Export module
export default OrderCard;