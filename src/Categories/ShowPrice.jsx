import React, { useEffect, useContext, useState } from 'react';
import { ShoppingCart } from '../ShoppingCart';

export const ShowPrice = (props) => {
    const shoppingCart = useContext(ShoppingCart); /* Klassen ShoppingCart må opprettes  */
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>{
        totalPriceSum();
    }, [shoppingCart.products]);
    
    //function to calculate the total price of the products in the shopping cart 
    const totalPriceSum = () => {
        let sum = 0;
        console.log('pub', shoppingCart.products);
        Object.keys(shoppingCart.products).forEach((product) => {
            console.log('product', shoppingCart.products[product]);
            Object.keys(shoppingCart.products[product]).forEach((size) => {
                const count = shoppingCart.products[product][size].count;
                const price = shoppingCart.products[product][size].price;
                sum += count * price;
            });
        });
        setTotalPrice(sum);
    };

    return (
        <div>
            {props.totalPrice > 0 && (
                <div id="total-price-div">
                    <div id="text-output">Se din bestilling</div>
                    <div id="total-price-output">kr: <b>{totalPrice}</b></div>
                </div>
            )}
        </div>
    );
};