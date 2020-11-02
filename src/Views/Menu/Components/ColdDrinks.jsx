import React from 'react';
import { coldDrinks } from '../../../productList';
import Drink from '../../../Categories/Drink'; 
import { MenuCategory } from './MenuCategory';

// Exports the variable and returns the values with the component attributes. 
export const ColdDrinks = () => {
    return coldDrinks.map((coldDrink) =>(
        <Drink type={coldDrink} />
    ));
};