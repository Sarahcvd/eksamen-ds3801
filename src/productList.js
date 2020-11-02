import React from 'react';

import americano from '../src/icons/americano.png'
import brioche from '../src/icons/brioche.png'
import brownies from '../src/icons/brownies.png'
import caramelmacchiato from '../src/icons/caramelMacchiato.png'
import chiapudding from '../src/icons/chiapudding.png'
import croissant from '../src/icons/croissant.png'
import expresso from '../src/icons/espresso.png'
import filterkaffe from '../src/icons/Filterkaffe.png'
import iskaffe from '../src/icons/iskaffe.png'
import kanelbolle from '../src/icons/kanelbolle.png'
import latte from '../src/icons/latte.png'
import mocha from '../src/icons/mocha.png'
import oreokake from '../src/icons/oreokake.png'
import scones from '../src/icons/scones.png'

const hotDrinks = [
    {
        id: 'Filterkaffe',
        size: [
          {
            price: 28,
            size: 'liten',
          },
          {
            price: 32,
            size: 'medium',
          },
          {
            price: 36,
            size: 'stor',
          },
        ],
        img: filterkaffe,
      },
      {
        id: 'Cappuccino',
        size: [
          {
            price: 38,
            size: 'liten',
          },
          {
            price: 42,
            size: 'medium',
          },
          {
            price: 46,
            size: 'stor',
          },
        ],
        img: '',
      },
      {
        id: 'Americano',
        size: [
          {
            price: 32,
            size: 'liten',
          },
          {
            price: 36,
            size: 'medium',
          },
          {
            price: 40,
            size: 'stor',
          },
        ],
        img: americano,
      },
      {
        id: 'Kaffe Mocha',
        size: [
          {
            price: 38,
            size: 'liten',
          },
          {
            price: 42,
            size: 'medium',
          },
          {
            price: 46,
            size: 'stor',
          },
        ],
        img: mocha,
      },
      {
        id: 'Kaffe Latte',
        size: [
          {
            price: 38,
            size: 'liten',
          },
          {
            price: 44,
            size: 'medium',
          },
          {
            price: 48,
            size: 'stor',
          },
        ],
        img: latte,
      },
      {
        id: 'Caramel Macchiato',
        size: [
          {
            price: 45,
            size: 'liten',
          },
          {
            price: 48,
            size: 'medium',
          },
          {
            price: 51,
            size: 'stor',
          },
        ],
        img: caramelmacchiato,
      },
      {
        id: 'Espresso',
        size: [
          {
            price: 34,
            size: 'liten',
          },
          {
            price: 38,
            size: 'medium',
          },
          {
            price: 42,
            size: 'stor',
          },
        ],
        img: expresso,
      },
      {
        id: 'Cortado',
        size: [
          {
            price: 36,
            size: 'liten',
          },
          {
            price: 40,
            size: 'medium',
          },
          {
            price: 44,
            size: 'stor',
          },
        ],
        img: '',
      },
    ];
    
    const coldDrinks = [
      {
        id: 'Iskaffe',
        size: [
          {
            name: 'Iskaffe (liten)',
            price: 36,
            size: 'liten',
          },
          {
            name: 'Iskaffe (medium)',
            price: 42,
            size: 'medium',
          },
          {
            name: 'Iskaffe (stor)',
            price: 50,
            size: 'stor',
          },
        ],
        img: iskaffe,
      },
      {
        id: 'Iste',
        size: [
          {
            name: 'Iste (liten)',
            price: 38,
            size: 'liten',
          },
          {
            name: 'Iste (medium)',
            price: 47,
            size: 'medium',
          },
          {
            name: 'Iste (stor)',
            price: 55,
            size: 'stor',
          },
        ],
        img: iskaffe,
      },
    ];
    
    const desserts = [
      {
        id: 'Brownies',
        name: 'Brownies',
        price: 44,
        img: brownies,
      },
      {
        id: 'Oreokake',
        name: 'Oreokake',
        price: 54,
        img: oreokake,
      },
      {
        id: 'Kanelbolle',
        name: 'Kanelbolle',
        price: 46,
        img: kanelbolle,
      },
      {
        id: 'Croissant',
        name: 'Croissant',
        price: 38,
        img: croissant,
      },
      {
        id: 'Chiapudding',
        name: 'Chiapudding',
        price: 42,
        img: chiapudding,
      },
      {
        id: 'Brioche',
        name: 'Brioche',
        price: 44,
        img: brioche,
      },
      {
        id: 'Scones',
        name: 'Scones',
        price: 37,
        img: scones,
      },
    ];

export {hotDrinks, coldDrinks, desserts};