import React from 'react';

const Desserts = (props) => {
    return(
        <div className="product-container">
            <div id="desserts-title">{props.name}</div>
            <div className="price-dessert">Pris: {props.price} kr,-</div>
        </div>
        
    )
}

export default Desserts;