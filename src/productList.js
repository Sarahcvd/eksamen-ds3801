import americano from "../src/images/americano.png";
import brioche from "../src/images/brioche.png";
import brownies from "../src/images/brownies.png";
import caramelmacchiato from "../src/images/caramelMacchiato.png";
import chiapudding from "../src/images/chiapudding.png";
import croissant from "../src/images/croissant.png";
import expresso from "../src/images/espresso.png";
import filterkaffe from "../src/images/Filterkaffe.png";
import iskaffe from "../src/images/iskaffe.png";
import kanelbolle from "../src/images/kanelbolle.png";
import latte from "../src/images/latte.png";
import mocha from "../src/images/mocha.png";
import oreokake from "../src/images/oreokake.png";
import scones from "../src/images/scones.png";
import Cappuccino from "../src/images/cappuccino.cortado.png";
import Cortado from "../src/images/cappuccino.cortado.png";

const hotDrinks = {
  name: "Varme Drikker",
  items: [
    {
      id: 1,
      name: "Filterkaffe",
      size: [
        {
          price: 28,
          size: "liten",
        },
        {
          price: 32,
          size: "medium",
        },
        {
          price: 36,
          size: "stor",
        },
      ],
      canBeDouble: false,
      img: filterkaffe,
    },
    {
      id: 2,
      name: "Cappuccino",
      size: [
        {
          price: 38,
          size: "liten",
        },
        {
          price: 42,
          size: "medium",
        },
        {
          price: 46,
          size: "stor",
        },
      ],
      canBeDouble: true,
      img: "",
    },
    {
      id: 3,
      name: "Americano",
      size: [
        {
          price: 32,
          size: "liten",
        },
        {
          price: 36,
          size: "medium",
        },
        {
          price: 40,
          size: "stor",
        },
      ],
      canBeDouble: true,
      img: americano,
    },
    {
      id: 4,
      name: "Kaffe Mocha",
      size: [
        {
          price: 38,
          size: "liten",
        },
        {
          price: 42,
          size: "medium",
        },
        {
          price: 46,
          size: "stor",
        },
      ],
      canBeDouble: true,
      img: mocha,
    },
    {
      id: 5,
      name: "Kaffe Latte",
      size: [
        {
          price: 38,
          size: "liten",
        },
        {
          price: 44,
          size: "medium",
        },
        {
          price: 48,
          size: "stor",
        },
      ],
      canBeDouble: true,
      img: latte,
    },
    {
      id: 6,
      name: "Caramel Macchiato",
      size: [
        {
          price: 45,
          size: "liten",
        },
        {
          price: 48,
          size: "medium",
        },
        {
          price: 51,
          size: "stor",
        },
      ],
      canBeDouble: true,
      img: caramelmacchiato,
    },
    {
      id: 7,
      name: "Espresso",
      size: [
        {
          price: 34,
          size: "liten",
        },
        {
          price: 38,
          size: "medium",
        },
        {
          price: 42,
          size: "stor",
        },
      ],
      canBeDouble: false,
      img: expresso,
    },
    {
      id: 8,
      name: "Cortado",
      size: [
        {
          price: 36,
          size: "liten",
        },
        {
          price: 40,
          size: "medium",
        },
        {
          price: 44,
          size: "stor",
        },
      ],
      canBeDouble: true,
      img: "",
    },
  ],
};

const coldDrinks = {
  name: "Kalde Drikker",
  items: [
    {
      id: 9,
      name: "Iskaffe",
      size: [
        {
          name: "Iskaffe (liten)",
          price: 36,
          size: "liten",
        },
        {
          name: "Iskaffe (medium)",
          price: 42,
          size: "medium",
        },
        {
          name: "Iskaffe (stor)",
          price: 50,
          size: "stor",
        },
      ],
      canBeDouble: true,
      img: iskaffe,
    },
    {
      id: 10,
      name: "Iste",
      size: [
        {
          name: "Iste (liten)",
          price: 38,
          size: "liten",
        },
        {
          name: "Iste (medium)",
          price: 47,
          size: "medium",
        },
        {
          name: "Iste (stor)",
          price: 55,
          size: "stor",
        },
      ],
      canBeDouble: false,
      img: iskaffe,
    },
  ],
};

const desserts = {
  name: "Dessert",
  items: [
    {
      id: 11,
      name: "Brownies",
      price: 44,
      img: brownies,
      canBeDouble: false,
    },
    {
      id: 12,
      name: "Oreokake",
      price: 54,
      img: oreokake,
      canBeDouble: false,
    },
    {
      id: 13,
      name: "Kanelbolle",
      price: 46,
      img: kanelbolle,
      canBeDouble: false,
    },
    {
      id: 14,
      name: "Croissant",
      price: 38,
      img: croissant,
      canBeDouble: false,
    },
    {
      id: 15,
      name: "Chiapudding",
      price: 42,
      img: chiapudding,
      canBeDouble: false,
    },
    {
      id: 16,
      name: "Brioche",
      price: 44,
      img: brioche,
      canBeDouble: false,
    },
    {
      id: 17,
      name: "Scones",
      price: 37,
      img: scones,
      canBeDouble: false,
    },
  ],
};

export { hotDrinks, coldDrinks, desserts };