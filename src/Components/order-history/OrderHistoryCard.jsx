import React, { useEffect, useState } from "react";

const OrderHistoryCard = (props) => {
  //useState and props products/setProducts
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    var price = 0;
    props.data.orderData.forEach((product) => {
      price += product.price;
    });

    setOrderPrice(price);
  }, [props.data]);

  const dateStyle = {
    color: "grey",
    overflow: "hidden",
    height: "25px",
    width: "300px",

  }

  const cardContainer = {
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto", 
    borderTop: "1px solid grey",
    borderBottom: "1px solid grey"
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
    borderRadius: "5px",
  }
  const countDivContainer = {
    margin: "auto",
    gridColumn: "3",
    gridRow: "1 /span 2",
    display: "grid",
    gridTemplateColumns: "auto auto auto", 
    gridGap: "5px"
  }

  const productList = props.data.orderData.map((product) => (
    <div key={`${product.id}-${product.size}`} style={cardContainer}>
      <div style={cardTextStyle}>{product.name}</div>
      <div style={cardSizeText}>{product.size}</div>
      <div style={countDivContainer}><div style={countStyle}>{product.count}</div></div>
    </div>
  ));

  return (
    <div>
      <p style={dateStyle}>{props.data.date.toString()}</p>
      {productList}
      <p>{`Totalpris: ${orderPrice}`}</p>
    </div>
  );
};

//Export module
export default OrderHistoryCard;