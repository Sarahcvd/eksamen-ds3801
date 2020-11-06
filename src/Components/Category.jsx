
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import '../styles2.css'
import CartSummaryBar from "./CartSummaryBar";

const Category = (props) => {
  const categoryLiContainerStyle = {
    gridColumn: "1 /span 3",
    display: "grid"
  }
  const categoryLiStyle = {
    listStyleType: "none",
    borderRadius: "5px",
    width: "385px", 
    color: "black",
    padding: "5px",
    margin: "5px",
    backgroundColor: "white",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }
  //useState and props products/setProducts
  const [products, setProducts] = useState({});

  const listItems = props.productList.items.map((item) => (
    <li 
      style={categoryLiStyle}
      className="category-li"
      key={item.id}>{<ProductCard data={item} />}</li>
  ));

  return (
  <div style={categoryLiContainerStyle}>
    <ul>{listItems}</ul>
    <CartSummaryBar />
  </div>
    );
};

//Export module
export default Category;