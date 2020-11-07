import React, { useState, useStyles } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import varmeDrikkerImage from "../images/varmeDrikker.jpg";
import kaldeDrikkerImage from "../images/kaldeDrikker.jpg";
import dessertImage from "../images/desserter.jpeg";


const Home = (props) => {

  const menuContainerStyle = {
    margin: "auto",
    gridRow: "2",
    gridColumn: "1 /span 3",
    display: "grid",
    gridTemplateRows: "auto auto auto"
  }
  const imageLinkStyle = {
    maxWidth: "100%",
    width:"360px",
    height:"auto",
    borderRadius: "15px",
    padding: "5px",
    transition: "0.4s",
    gridColumn: "1 /span 3"
  };

  const titleStyle = {
    marginTop: "80px",
    color: "white",
    fontSize: "x-large",
    fontWeight: "bold",
    position: "absolute",
    padding: "25px",
    fontFamily: "Roboto",
  }

  //useState and props products/setProducts
  return (
    <div 
      className="menu-container"
      style={menuContainerStyle}
    >
      <Link to={"/HotDrinks/"} id="hot-drink-container">
        <p className="titlestyle"
          id="hot-drinks-title"
          style={titleStyle}
          >Varme drikker</p>
        <img className="hot-drinks-image"
          style={imageLinkStyle}
          src={varmeDrikkerImage}
          alt={"Varme Drikker"}
        />
      </Link>
      <Link to={"/ColdDrinks/"} id="cold-drink-container">
        <p className="titlestyle"
          id="cold-drinks-title"
          style={titleStyle}
        >Kalde drikker</p>
        <img className="cold-drinks-image"
          style={imageLinkStyle}
          src={kaldeDrikkerImage}
          alt={"Kalde Drikker"}
        />
      </Link>
      <Link to={"/Desserts/"} id="dessert-container">
        <p className="titlestyle"
          id="desserts-title"
          style={titleStyle}
        >Desserter</p>
        <img className="desserts-image"
          style={imageLinkStyle}
          src={dessertImage}
          alt={"Desserter"}
        />
      </Link>
    </div>
  );
};

//Export module
export default Home;