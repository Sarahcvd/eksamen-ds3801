import React from "react";
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
    paddingLeft:"7%",
    justifyItems: "center"
  }

  const categoryLiStyle = {
    listStyleType: "none",
    borderRadius: "10px",
    width: "330px", 
    height: "90px",
    color: "black",
    padding: "5px",
    margin: "5px",
    backgroundColor: "white",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const categoryStyle = {
    gridRow: "2",
    paddingBottom: "80px",
    justifyItems: "center"
  }

  const listItems = props.productList.items.map((item) => (
    <li 
      style={categoryLiStyle}
      className="category-li"
      key={item.id}>{<ProductCard data={item} />}</li>
  ));

  return (
    <div style={categoryStyle}>
      <ul className="product-list" style={categoryLiContainerStyle}>
        {listItems}
      </ul>
      <CartSummaryBar />
    </div>
  );
};

//Export module
export default Category;