import React from 'react';
import { desserts, hotDrinks } from '../../../productList';
import Drink from '../../../Categories/Drink';

// Exports the variable and returns the values with the component attributes. 
export const HotDrinks = () => {
    return hotDrinks.map((hotDrink) =>(
        <Drink type={hotDrink} img={hotDrink.img}/>
    ));
};