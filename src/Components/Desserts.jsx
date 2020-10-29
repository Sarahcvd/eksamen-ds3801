import React from 'react';
import { desserts } from '../../../productLists'; // This needs to be linked to the proper folder to find "desserts" array in "productList".
import Dessert from '../../../Desserts'; // This needs to be linked to the proper folder to find "Desserts".

export const Desserts = () => {
  return desserts.map((dessert) => (
    
    // This component doesent include choice of size.
    <Dessert
      key={desserts.id}
      name={desserts.name}
      price={desserts.price}
    />
  ));
};