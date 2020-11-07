import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sitteHer from "../../images/sitteHer.png"
import taMed from "../../images/taMed.png"

const LocationSelector = (props) => {
  //useState and props products/setProducts

  function handleTypeChange(changeEvent) {
    props.setSelectedLocation(changeEvent.target.value);
  }

  const locationContainerStyle = {
    margin: "auto",
    borderRadius: "5px",
    color: "black",
    padding: "5px",

  }

  const formStyle = {
    margin: "auto", 
    width: "fit-content", 
    display: "grid",
    gridTemplateColumn: "auto auto",
    gridGap: "5px"
  }

  const radio1 = {
    gridColumn: "1"
  }

  const radio2 = {
    gridColumn: "2"
  }

  const radioButtonStyle = {
    opacity: "0",
    width: "0",
    height: "0"
  }

  const imgStyle = {
    height: "50px",
    borderRadius: "100%", 
    padding: "5px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  return (
    <div style={locationContainerStyle}>
      <form style={formStyle}>
        <div className="radio" style={radio1}>
          <label>
            <input
              style={radioButtonStyle}
              type="radio"
              value="sitt her"
              checked={props.selectedLocation === "sitt her"}
              onChange={handleTypeChange}
            />
            <img 
              src={sitteHer}
              style={imgStyle}
            />
            <p>Sitt Her</p>
          </label>
        </div>
        <div className="radio" style={radio2}>
          <label>
            <input
              style={radioButtonStyle}
              type="radio"
              value="ta med"
              checked={props.selectedLocation === "ta med"}
              onChange={handleTypeChange}
            />
            <img 
              src={taMed}
              style={imgStyle}
            />
            <p>Ta Med</p>
          </label>
        </div>
      </form>
    </div>
  );
};

//Export module
export default LocationSelector;