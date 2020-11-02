import React from 'react';

const Desserts = (props) => {
    return(
        <div className="product-container">
            <img id="dessert-image" src={props.img}></img>
            <div id="desserts-title">{props.name}</div>
            <div className="price-dessert">Pris: {props.price} kr,-</div> 
        </div>
        
    )
}

export default Desserts;