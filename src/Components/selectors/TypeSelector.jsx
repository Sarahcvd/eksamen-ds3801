import React from "react";

const TypeSelector = (props) => {
  //useState and props products/setProducts

  const gridItem = {
    margin: "auto",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
    padding: "15px",
    width: "200px",
    borderRadius: "10px",
  }

  function handleTypeChange(changeEvent) {
    props.setSelectedType(changeEvent.target.value);
  }

  const formStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    fontSize:"25px"
  }

  const doubleStyle = {
    gridColumn: "2"
  }

  const simpleStyle = {
    gridColumn: "1"
  }

  return (
    <div style={gridItem}>
      <form style={formStyle}>
        <div className="radio">
          <div>
            <input 
              style={simpleStyle}
              type="radio"
              value="enkel"
              checked={props.selectedType === "enkel"}
              onChange={handleTypeChange}
            />
            Enkel
          </div>
        </div>
        <div className="radio">
          <label>
            <input style={doubleStyle}
              type="radio"
              value="dobbel"
              checked={props.selectedType === "dobbel"}
              onChange={handleTypeChange}
            />
            Dobbel
          </label>
        </div>
      </form>
    </div>
  );
};

//Export module
export default TypeSelector;