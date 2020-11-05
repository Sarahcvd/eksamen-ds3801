import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../styles2.css';

const ProductCard = (props) => {
  const productImgStyle = {
    height: "50px",
    gridColumn: "1",
  }

  const productNameStyle = {
    gridColumn: "2"
  }

  const productPriceStyle = {
    gridColumn: "3"
  }
  //useState and props products/setProducts
  const [products, setProducts] = useState({});
  const [currentOrders, setCurrentOrders] = useState([]);
  const [productPrice, setProductPrice] = useState(0);

  useEffect(() => {
    if (props.data.size) {
      setProductPrice(props.data.size[0].price);
    } else {
      setProductPrice(props.data.price);
    }
  }, [props.data]);

  function handleClick() {
    window.location.href += `/${props.data.id}`;
  }

  return (
    <Link to={`${props.data.id}/`} id="product-output">
      <img 
        style={productImgStyle}
        src={props.data.img}/>
      <div style={productNameStyle}>{props.data.name}</div>
      <div style={productPriceStyle}>{productPrice},-</div>
    </Link>
  );
};

//Export module
export default ProductCard;