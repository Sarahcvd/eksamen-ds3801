import React from 'react';
import { hotDrinks } from '../../../productList'; // This needs to be linked to the proper folder to find "hotDrinks" array in "productList".
import Drinks from '../../../Drinks'; // This needs to be linked to the proper folder to find "Drinks".

// Exports the variable and returns the values with the component attributes. 
export const HotDrinks = () => {
    return hotDrinks.map((hotDrinks) =>(
        <Drinks key={hotDrinks.id} name={hotDrinks.size[0].name} price={hotDrinks.size[0].price} />
    ));
};