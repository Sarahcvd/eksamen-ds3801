
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {ColdDrinks} from './Components/ColdDrinks';
import {HotDrinks} from './Components/HotDrinks';
import {Desserts} from './Components/Desserts';
import {MenuCategory} from './Components/MenuCategory';
import {ShowPrice} from '../../Categories/ShowPrice';
import {warmBeverages, coldBeverages, desserts} from '../../productList';
import '../../styles.css'; 




const MainMenu=()=>{
    const menuCategoryNames = ['Hot Drinks', 'Cold Drinks', 'Desserts'];
    let totalPrice = 1;

    const [menuCategory, setMenuCategory] = useState(menuCategoryNames[0]);
    const [menuProduct, setMenuProduct] = useState([]);

    let {area} = useParams();

    const getArea=()=>{
        switch(area){
            case 'HotDrinks':
                return <div className="product-list-container"><HotDrinks/></div>;
            case 'ColdDrinks':
                return <div className="product-list-container"><ColdDrinks/></div>;
            case 'Desserts':
                return <div className="product-list-container"><Desserts/></div>;
            default:
                return <div className="product-list-container"><HotDrinks/></div>;
        }
    };

    return(
        <>
        {<MenuCategory/>}
            {getArea()}
        <ShowPrice totalPrice={totalPrice}/>
        </>
    );
    
};

export default MainMenu;