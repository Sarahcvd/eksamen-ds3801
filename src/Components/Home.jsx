import React, { useState, useStyles } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import varmeDrikkerImage from "../images/varmeDrikker.jpg";
import kaldeDrikkerImage from "../images/kaldeDrikker.jpg";
import dessertImage from "../images/desserter.jpeg";


const Home = (props) => {

  const menuContainerStyle = {
    margin: "auto",
    gridRow: "2",
    gridColumn: "1 /span 2",
    display: "grid",
    gridTemplateRows: "auto auto auto"
  }
  const imageLinkStyle = {
    maxWidth: "100%",
    borderRadius: "15px",
    padding: "5px",
    margin: "10px",
    cursor: "pointer",
    transition: "0.4s",
    width: "375px",
    gridColumn: "1 /span 3"
  };

  const titleStyle = {
    marginTop: "80px",
    color: "white",
    fontSize: "x-large",
    fontWeight: "bold",
    position: "absolute",
    padding: "25px"
  }

  //useState and props products/setProducts
  return (
    <div>
      <Link to={"/HotDrinks/"}>
        <div id="hot-drink-container">
          <p
            id="hot-drinks-title"
            style={titleStyle}
            >Varme Drikker</p>
          <img className="hot-drinks-image"
            style={imageLinkStyle}
            src={varmeDrikkerImage}
            alt={"Varme Drikker"}
          />
        </div>
      </Link>
      <Link to={"/ColdDrinks/"}>
        <div id="cold-drink-container">
          <p
            id="cold-drinks-title"
            style={titleStyle}
          >Kalde Drikker</p>
          <img className="cold-drinks-image"
            style={imageLinkStyle}
            src={kaldeDrikkerImage}
            alt={"Kalde Drikker"}
          />
        </div>
      </Link>
      <Link to={"/Desserts/"}>
        <div id="dessert-container">
          <p 
            id="desserts-title"
            style={titleStyle}
          >Desserter</p>
          <img className="desserts-image"
            style={imageLinkStyle}
            src={dessertImage}
            alt={"Desserter"}
          />
        </div>
      </Link>
    </div>
  );
};

//Export module
export default Home;