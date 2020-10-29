import React from 'react';
import { hotDrinks } from '../../productList';
import Drink from '../../Categories/Drink';

// Exports the variable and returns the values with the component attributes. 
const HotDrinks = () => {
    return hotDrinks.map((hotDrinks) =>(
        <Drink key={hotDrinks.id} name={hotDrinks.size[0].name} price={hotDrinks.size[0].price} />
    ));
};

export default HotDrinks;