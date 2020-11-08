import React from "react";
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
    color: "#815757",
    padding: "5px",
  }

  const formStyle = {
    margin: "10px", 
    width: "fit-content", 
    display: "grid",
    gridTemplateColumn: "auto auto",
    gridGap: "35px"
  }

  const radio1 = {
    gridColumn: "1",
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
    height: "80px",
    borderRadius: "100%", 
    padding: "5px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
  }

  const seatedStyle = {
    marginLeft:"20px"
  }

  const takeAwayStyle={
    marginLeft:"16px"
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
              alt="Sit here"
            />
            <p style={seatedStyle}>Sitt her</p>
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
              alt="take-away"
            />
            <p style={takeAwayStyle}>Ta med</p>
          </label>
        </div>
      </form>
    </div>
  );
};

//Export module
export default LocationSelector;