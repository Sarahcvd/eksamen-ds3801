import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SizeSelector = (props) => {
  //useState and props products/setProducts

  function handleSizeChange(changeEvent) {
    props.setSelectedSize(changeEvent.target.value);
  }

  return (
    <div>
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