import React from 'react';
import { coldDrinks } from '../../../productList'; // This needs to be linked to the proper folder to find "coldDrinks" array in "productList".
import Drinks from '../../../Drinks'; // This needs to be linked to the proper folder to find "Drinks".

// Exports the variable and returns the values with the component attributes. 
export const ColdDrinks = () => {
    return coldDrinks.map((coldDrinks) =>(
        <Drinks key={coldDrinks.id} name={coldDrinks.size[0].name} price={coldDrinks.size[0].price} />
    ));
};