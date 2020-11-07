import React, { useEffect, useState } from "react";

const TypeSelector = (props) => {
  //useState and props products/setProducts

  const gridItem = {
    margin: "auto",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
    padding: "15px"
  }

  function handleTypeChange(changeEvent) {
    props.setSelectedType(changeEvent.target.value);
  }

  return (
    <div style={gridItem}>
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="enkel"
              checked={props.selectedType === "enkel"}
              onChange={handleTypeChange}
            />
            Enkel
          </label>
        </div>
        <div className="radio">
          <label>
            <input
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