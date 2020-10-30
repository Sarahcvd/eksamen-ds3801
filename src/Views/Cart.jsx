import React, { useContext } from 'react';
import { ShoppingCart } from '../ShoppingCart';

export const Cart = (props) => {
    const shoppingCart = useContext(ShoppingCart);
    let count;
    let price;
    return (
        <>
             <div>{
                Object.keys(shoppingCart.products).forEach((product) => {
                    console.log("Vare: " + product);
                    Object.keys(shoppingCart.products[product]).forEach((size) =>{
                        console.log("Størrelse: " + size);
                        count = shoppingCart.products[product][size].size;
                        price = shoppingCart.products[product][size].price;
                        console.log("Antal:  " + count);
                        console.log("Pris:  " + price);
                    });
                })}
                <div id="shopping-cart-output">Du har bestilt + {count, price}</div>
            </div>
        </>
    );
};