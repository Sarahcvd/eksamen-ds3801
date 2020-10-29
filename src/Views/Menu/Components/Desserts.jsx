import React from 'react';
import { desserts } from '../../../productList';
import Dessert from '../../../Categories/Dessert';

export const Desserts = () => {
  return desserts.map((desserts) => (
    
    // This component doesnt include choice of size.
    <Dessert
      key={desserts.id}
      name={desserts.name}
      price={desserts.price}
    />
  ));
};