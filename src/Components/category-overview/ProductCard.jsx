import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles2.css';
import arrow from "../../images/arrow.png";

const ProductCard = (props) => {
  const productImgStyle = {
    height: "80px",
    position: "absolute",
    top: "10px"
  }

  const productNameStyle = {
    paddingTop: "35px",
    fontSize: "20px",
    position:"absolute",
    left: "90px",
    width: "120px"
  }

  const productPriceStyle = {
    paddingTop: "35px",
    fontSize: "20px",
    position: "absolute",
    left: "230px"
  }

  const productArrowStyle = {
    height: "25px",
    paddingTop: "35px",
    position: "absolute",
    left: "290px"
  }

  const productOutputCard = {
    textDecoration: "none",
    color: "black",
    display: "inline",
    position: "relative",
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
  

  return (
    <Link to={`${props.data.id}/`} style={productOutputCard}>
      <img 
        style={productImgStyle}
        src={props.data.img}
        alt={props.data.name}
      />
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
        alt="next-arrow"
      />
    </Link>
  );
};

//Export module
export default ProductCard;