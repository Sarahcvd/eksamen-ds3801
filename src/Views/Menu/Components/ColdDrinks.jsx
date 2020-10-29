import React from 'react';
import { coldDrinks } from '../../../productList';
import Drink from '../../../Categories/Drink'; 

// Exports the variable and returns the values with the component attributes. 
const ColdDrinks = () => {
    return coldDrinks.map((coldDrinks) =>(
        <Drink key={coldDrinks.id} name={coldDrinks.size[0].name} price={coldDrinks.size[0].price} />
    ));
};

export default ColdDrinks;