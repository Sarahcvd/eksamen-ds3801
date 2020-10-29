import React from 'react';

const Dessert = (props) => {
    return(
        <div className="menu-coatainer-dessert">
            <div className="dessert-title">{props.name}</div>
            <div className="price-dessert">Pris: {props.price} kr</div>
        </div>
    )
}

export default Dessert;