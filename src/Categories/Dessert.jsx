import React from 'react';

const Desserts = (props) => {
    return(
        <div className="menu-coatainer-dessert">
            <div className="dessert-title">{props.name}</div>
            <div className="price-dessert">Pris: {props.price} kr</div>
        </div>
    )
}

export default Desserts;