import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SizeSelector = (props) => {
  //useState and props products/setProducts

  const gridItem = {
    margin: "auto",
    padding: "15px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)"
  }

  function handleSizeChange(changeEvent) {
    props.setSelectedSize(changeEvent.target.value);
  }

  return (
    <div style={gridItem}>
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="liten"
              checked={props.selectedSize === "liten"}
              onChange={handleSizeChange}
            />
            Liten
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="medium"
              checked={props.selectedSize === "medium"}
              onChange={handleSizeChange}
            />
            Medium
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="stor"
              checked={props.selectedSize === "stor"}
              onChange={handleSizeChange}
            />
            Stor
          </label>
        </div>
      </form>
    </div>
  );
};

//Export module
export default SizeSelector;