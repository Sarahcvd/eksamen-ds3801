import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SizeSelector from "./selectors/SizeSelector";
import TypeSelector from "./selectors/TypeSelector";

const Product = (props) => {
  //useState and props products/setProducts
  const productId = useParams().productId;
  const [product, setProduct] = useState({});
  const [useSizes, setUseSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState("liten");
  const [selectedType, setSelectedType] = useState("enkel");
  const [count, setCount] = useState(1);

  const productContainerStyle = {
    gridColumn: "2",
    display: "inline-grid",
    gridGap: "15px"
  }

  const gridItem = {
    margin: "auto",
  }

  const imageStyle = {
    maxWidth: "100%",
    width: "200px",
    margin: "auto"
  };

  useEffect(() => {
    const p = props.productList.items.find(
      (x) => x.id.toString() === productId
    );
    if (p.size) {
      console.log(p.size);
      setUseSizes(true);
    }
    setProduct(p);
  }, [props.productList]);

  function getCorrectPrice() {
    if (!useSizes) {
      return product.price;
    } else {
      const correctSize = product.size.find((x) => x.size === selectedSize);
      return correctSize.price;
    }
  }

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div style={productContainerStyle}>
      <p style={gridItem}>{product.name}</p>
      <img src={product.img} style={imageStyle}></img>
      <p style={gridItem}>kr {getCorrectPrice()},-</p>

      {useSizes && (
        <SizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      )}

      <TypeSelector
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <div id="product-count-section">
        <button style={gridItem} onClick={decreaseCount}>-</button>
        <p style={gridItem}>{count}</p>
        <button style={gridItem} onClick={increaseCount}>+</button>
      </div>
    </div>
  );
};

//Export module
export default Product;