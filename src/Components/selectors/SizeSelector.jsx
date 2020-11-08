import React from "react";

const SizeSelector = (props) => {
  //useState and props products/setProducts

  const gridItem = {
    margin: "auto",
    padding: "15px",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
    width: "200px",
    borderRadius: "10px",
    fontSize: "30px"
  }

  function handleSizeChange(changeEvent) {
    props.setSelectedSize(changeEvent.target.value);
  }

  const mediumStyle = {
    margin: "15px",
  }

  return (
    <div style={gridItem}>
      <form>
        <div className="radio">
          <label>
            <input style={mediumStyle}
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
            <input style={mediumStyle}
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
            <input style={mediumStyle}
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