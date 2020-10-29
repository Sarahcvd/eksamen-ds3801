
import React, { useState, useEffect } from 'react'
import Drink from './Drink';
import Dessert from './Dessert';
import {warmBeverages, coldBeverages, desserts} from './productList';
import './styles.css'; 




const MainMenu=()=>{
    const menuCategoryName = ['Dessert', 'Warm Drink', 'Cold Drink'];
    let totalPrice = 1;

    const [menuProduct, setMenuProduct] = useState([]);
    const [menuCategory, setMenuCategory] = useState(menuCategoryName[0]);

    let {area} = useParams();

    const getArea=()=>{

        switch(area){
            case 'Dessert':
                return <Desserts/>;
            case 'Warm Drink':
                return <WarmDrink/>;
            case 'Cold Drink':
                return <ColdDrink/>;   
        }

    };

    return(
        <>
        <MenuCategory/>
            {getArea()}
        <ShowPrice totalPrice={1}/>
        </>
    );
    
};

export default MainMenu;