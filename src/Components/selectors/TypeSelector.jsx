import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TypeSelector = (props) => {
  //useState and props products/setProducts

  function handleTypeChange(changeEvent) {
    props.setSelectedType(changeEvent.target.value);
  }

  return (
    <div>
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