
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
    const menuCategoryName = ['Desserts', 'Hot Drinks', 'Cold Drinks'];
    let totalPrice = 1;

    const [menuProduct, setMenuProduct] = useState([]);
    const [menuCategory, setMenuCategory] = useState(menuCategoryName[0]);

    let {area} = useParams();

    const getArea=()=>{

        switch(area){
            case 'Desserts':
                return <Desserts/>;
            case 'Hot Drinks':
                return <HotDrinks/>;
            case 'Cold Drinks':
                return <ColdDrinks/>;   
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