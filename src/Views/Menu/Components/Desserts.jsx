import React from 'react';
import { desserts } from '../../../productList';
import Dessert from '../../../Categories/Dessert';

export const Desserts = () => {
  return desserts.map((dessert) => (
    // This component doesnt include choice of size.
      <Dessert
        key={dessert.id}
        name={dessert.name}
        price={dessert.price}
      />
  ));
};