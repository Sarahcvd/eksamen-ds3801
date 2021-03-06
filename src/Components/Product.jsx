import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { OrderContext } from "../orderContext";
import SizeSelector from "./selectors/SizeSelector";
import TypeSelector from "./selectors/TypeSelector";
import '../../src/styles2.css'


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

  const productCountSectionStyle = {
    displat: "grid",
    gridTemplateRows: "auto auto",
    margin: "1px 1px 1px 1px", 
    fontSize: "xx-large",
    padding: "0px",
    marginBottom: "20px"
  }

  const countSectionStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center"
  }

  const decreaseCountStyle = {
    gridColumn: "1",
    textAlign:"center",
    borderRadius: "100%",
    width: "40px",  
    padding: "5px"
  }

  const countStyle = {
    gridColumn: "2",
    textAlign: "center",
    borderRadius: "5px",
    width: "40px",
    backgroundColor: "#815757", 
    color: "white",
    padding: "5px"
  }

  const increaseCountStyle = {
    gridColumn: "3",
    textAlign: "center",
    borderRadius: "100%",
    width: "40px", 
    padding: "5px"
  }

  const addBtnStyle = {
    gridRow: "2",
    textAlign: "center",
    boxShadow: "3px 3px 20px -3px rgba(0, 0, 0, 0.5)",
    padding: "5px",
    marginBottom: "10px"
  }

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
    <div id="test" style={productContainerStyle}>
      <p style={gridItem}>{product.name}</p>
      <img className="image-style" src={product.img} style={imageStyle} alt={product.img}></img>
      <p style={gridItem}>kr {getCorrectPrice()},-</p>

      {useSizes && (
        <SizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      )}
      {product.canBeDouble && (
        <TypeSelector
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      )}
      <div style={productCountSectionStyle}>
        <div style={countSectionStyle}>
          <p className="count-style" style={decreaseCountStyle} onClick={decreaseCount}>-</p>
          <p style={countStyle}>{count}</p>
          <p className="count-style" style={increaseCountStyle} onClick={increaseCount}>+</p>
        </div>
        <div className="add-button-style" style={addBtnStyle} onClick={addOrderToCart}>Legg til</div>

      </div>
    </div>
  );
};

//Export module
export default Product;