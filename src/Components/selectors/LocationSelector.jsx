import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LocationSelector = (props) => {
  //useState and props products/setProducts

  function handleTypeChange(changeEvent) {
    props.setSelectedLocation(changeEvent.target.value);
  }

  return (
    <div>
      <form>
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