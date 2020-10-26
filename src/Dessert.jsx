import React from 'react';

const Dessert = (props) => {
    return(
        <div className="menu-coatainer-dessert">
            <div className="menu-title">{props.name}</div>
            <div className="price-beverage">Pris: {props.price} kr</div>
        </div>
    )
}

export default Dessert;