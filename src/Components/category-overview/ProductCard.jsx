import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles2.css';
import arrow from "../../images/arrow.png";

const ProductCard = (props) => {
  const productImgStyle = {
    height: "80px",
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
    padding: "35px 10px 35px 0px"
  }

  const productOutputCard = {
    textDecoration: "none",
    color: "black",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    height: "100px",
    textAlign: "left",
    gridGap: "5px"
  }
  //useState and props products/setProducts
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
    <Link to={`${props.data.id}/`} style={productOutputCard}>
      <img 
        style={productImgStyle}
        src={props.data.img}/>
        <div 
          className="product-name-style" 
          style={productNameStyle}>{props.data.name}
        </div>
        <div 
          className="product-price-style" 
          style={productPriceStyle}>{productPrice},-
        </div>
        <img 
          className="product-arrow-style" 
          src={arrow}
          style={productArrowStyle}
        />
    </Link>
  );
};

//Export module
export default ProductCard;