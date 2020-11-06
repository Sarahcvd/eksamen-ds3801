import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../orderContext";

const CartSummaryBar = (props) => {
  const { orders, setOrders } = useContext(OrderContext);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    var count = 0;
    var price = 0;

    orders.forEach((order) => {
      price += order.price * order.count;
      count += order.count;
    });

    setItemCount(count);
    setTotalPrice(`kr ${price};-`);
  }, [orders]);

  return (
    <Link to={"/Cart"}>
      <div>
        <p>{itemCount}</p>
        <p>Se Din bestilling</p>
        <p>{totalPrice}</p>
      </div>
    </Link>
  );
};

//Export module
export default CartSummaryBar;