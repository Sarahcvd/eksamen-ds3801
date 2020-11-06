import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { OrderContext } from "../orderContext";
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
  const { orders, setOrders } = useContext(OrderContext);
  let history = useHistory();

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

  function addOrderToCart() {
    var newOrder = {
      count: count,
      size: useSizes ? selectedSize : null,
      type: product.canBeDouble ? selectedType : null,
      price: getCorrectPrice() + (selectedType === "dobbel" ? 10 : 0),
      name: product.name,
      id: product.id,
    };

    const newProductList = [];
    console.log(orders);

    if (orders != null) {
      orders.forEach((order) => {
        if (
          order.size === newOrder.size &&
          order.id === newOrder.id &&
          order.type === newOrder.type
        ) {
          newOrder.count += order.count;
        } else {
          newProductList.push(order);
        }
      });
    }

    newProductList.push(newOrder);

    setOrders(newProductList);
    history.goBack();
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
        <button onClick={addOrderToCart}>Legg til</button>
      </div>
    </div>
  );
};

//Export module
export default Product;