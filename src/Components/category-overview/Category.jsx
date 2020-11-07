import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import CartSummaryBar from "./CartSummaryBar";
import '../../styles2.css'

const Category = (props) => {
  const categoryLiContainerStyle = {
    margin: "auto",
    gridRow: "2",
    gridColumn: "2 /span 6",
    display: "grid",
    gridTemplateRows: "auto auto auto",
    paddingLeft:"4%"
  }

  const categoryLiStyle = {
    listStyleType: "none",
    borderRadius: "10px",
    width: "auto", 
    color: "black",
    padding: "5px",
    margin: "5px",
    backgroundColor: "white",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const categoryStyle = {
    gridRow: "2",
    paddingBottom: "80px"
  }

  const coverStyle = {
    backgroundColor: "#815757",
    width: "100px",
    height: "60px",
    padding: "5px",
    position: "absolute",
    top: "-20px", 
    left: "-0px"
  }

  const listItems = props.productList.items.map((item) => (
    <li 
      style={categoryLiStyle}
      className="category-li"
      key={item.id}>{<ProductCard data={item} />}</li>
  ));

  return (
    <div style={categoryStyle}>
      <p style={coverStyle}></p>
      <ul className="product-list" style={categoryLiContainerStyle}>
        {listItems}
      </ul>
      <CartSummaryBar />
    </div>
  );
};

//Export module
export default Category;