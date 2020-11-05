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

  const imageStyle = {
    maxWidth: "100%",
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
    <div>
      <p>{product.name}</p>
      <img src={product.img} style={imageStyle}></img>
      <p>{getCorrectPrice()}</p>

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
      <button onClick={decreaseCount}>-</button>
      <p>{count}</p>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

//Export module
export default Product;