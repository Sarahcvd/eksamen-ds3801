import React from 'react';
import { desserts } from '../../../productList';
import Dessert from '../../../Categories/Dessert';

const Desserts = () => {
  return desserts.map((dessert) => (
    
    // This component doesnt include choice of size.
    <Dessert
      key={desserts.id}
      name={desserts.name}
      price={desserts.price}
    />
  ));
};

export default Desserts;