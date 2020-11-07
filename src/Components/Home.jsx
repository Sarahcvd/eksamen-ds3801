import React from "react";
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
    <div className="menu-container" 
      style={menuContainerStyle}
    >
      <div id="hot-drink-container">
        <p
          id="hot-drinks-title"
          style={titleStyle}
          onClick={() => {
            window.location.href = "/HotDrinks/";
          }}
          >Varme Drikker</p>
        <img className="hot-drinks-image"
          style={imageLinkStyle}
          src={varmeDrikkerImage}
          alt={"Varme Drikker"}
          onClick={() => {
            window.location.href = "/HotDrinks/";
          }}
        />
      </div>
      <div id="cold-drink-container">
        <p
          id="cold-drinks-title"
          style={titleStyle}
          onClick={() => {
            window.location.href = "/ColdDrinks/";
          }}
        >Kalde Drikker</p>
        <img className="cold-drinks-image"
          style={imageLinkStyle}
          src={kaldeDrikkerImage}
          alt={"Kalde Drikker"}
          onClick={() => {
            window.location.href = "/ColdDrinks/";
          }}
        />
      </div>
      <div id="dessert-container">
        <p 
          id="desserts-title"
          style={titleStyle}
          onClick={() => {
            window.location.href = "/Desserts/";
          }}
        >Desserter</p>
        <img className="desserts-image"
        style={imageLinkStyle}
          src={dessertImage}
          alt={"Desserter"}
          onClick={() => {
            window.location.href = "/Desserts/";
          }}
        />
      </div>
    </div>
  );
};

//Export module
export default Home;