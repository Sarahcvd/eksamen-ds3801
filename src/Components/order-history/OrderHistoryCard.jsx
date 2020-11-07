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

  const productList = props.data.orderData.map((product) => (
    <div key={`${product.id}-${product.size}`}>
      <div>{product.name}</div>
      <div>{product.size}</div>
      <div>{product.count}</div>
    </div>
  ));

  return (
    <div>
      <p>{props.data.date.toString()}</p>
      {productList}
      <p>{`Totalpris: ${orderPrice}`}</p>
    </div>
  );
};

//Export module
export default OrderHistoryCard;