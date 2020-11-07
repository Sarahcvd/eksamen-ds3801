import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const formStyle = {
    margin: "auto", 
    width: "fit-content", 
  }

  return (
    <div style={locationContainerStyle}>
      <form style={formStyle}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="sitt her"
              checked={props.selectedLocation === "sitt her"}
              onChange={handleTypeChange}
            />
            Sitt Her
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="ta med"
              checked={props.selectedLocation === "ta med"}
              onChange={handleTypeChange}
            />
            Ta Med
          </label>
        </div>
      </form>
    </div>
  );
};

//Export module
export default LocationSelector;