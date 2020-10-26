import React, {useState, useEffect} from 'react';

const Beverage = (props) =>{

    const [sizeInput, setSizeInput] = useState(0);

    return(
        <div className="menu-container-beverage">
            <div className="menu-title">{props.name}</div>
            <div className="size-btn-container">
                <button className={`size-button`}>Liten</button>
                <button className={`size-button`}>Medium</button>
                <button className={`size-button`}>Stor</button>
            </div>
            <div className="price-beverage">Pris: {props.price} kr</div>
            <div className="order-btn">+</div>
        </div>
    )
}

export default Beverage;