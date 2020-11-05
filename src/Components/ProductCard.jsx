import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../styles2.css';
import arrow from "../images/arrow.png";

const ProductCard = (props) => {
  const productImgStyle = {
    top: "200px",
    height: "100px",
    gridColumn: "1",
    padding: "0px"
  }

  const productNameStyle = {
    gridColumn: "2",
    paddingTop: "35px",
    fontSize: "20px"
  }

  const productPriceStyle = {
    gridColumn: "3",
    paddingTop: "35px",
    fontSize: "20px"
  }

  const productArrowStyle = {
    height: "25px",
    width: "auto",
    padding: "35px 0px 0px 0px"
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
      <img 
        src={arrow}
        style={productArrowStyle}/>
    </Link>
  );
};

//Export module
export default ProductCard;