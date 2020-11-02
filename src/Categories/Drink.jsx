import React, {useContext, useState} from 'react';
import {ShoppingCart} from '../ShoppingCart';

const Drink = (props) =>{
    const shoppingCart = useContext(ShoppingCart); 

    const getOrderdCount = (product) => {
        if (shoppingCart.products[props.type.id] && shoppingCart.products[props.type.id][product.size]) {
          return shoppingCart.products[props.type.id][product.size].number;
        }
        return 0;
    };

    // Function to add a product to the shoppingcart 
    const addToShoppingCart = (product) => {
        const orderdCount = getOrderdCount(product);
        shoppingCart.setProducts((prevstate) => {
          return {
            ...prevstate,
            [props.type.id]: {
              ...prevstate[props.type.id],
              [product.size]: {
                size: orderdCount + 1,
                price: product.price
              },
            },
          };
        });
    };

    // Function to remove a product from the shoppingcart 
    const removeFromShoppingCart = (product) => {
        const orderdCount = getOrderdCount(product);
        if (orderdCount > 0) {
            shoppingCart.setProducts((prevstate) => {
                return {
                    ...prevstate,
                    [props.type.id]: {
                        ...prevstate[props.type.id],
                        [product.size]: {
                            size: orderdCount - 1,
                            price: product.price
                        },
                    },
                };
            });
        }
    };

    return (
    <div className="product-container">
        <img id="drink-image" src={props.img}></img>
        <div className='product-title'>{props.type.id}</div>
        {props.type.size.map((product) => {
        return (
            <div>
                <span
                    onClick={() => {
                        removeFromShoppingCart(product);
                    }}
                    className={'button'}
                >
                    -
                </span>
                <span>{getOrderdCount(product)}</span>
                <span
                    onClick={() => {
                        addToShoppingCart(product);
                    }}
                    className={'button'}
                >
                    +
                </span>
                <span>
                    {product.size} {product.price}kr
                </span>
            </div>
        );
        })}
    </div>
    );
}

export default Drink;