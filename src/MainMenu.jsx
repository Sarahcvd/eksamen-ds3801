import React, {useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import '../../semesteroppgave-ds3801/src/style.css';
import {Desserts} from './Components/Dessert';
import {WarmDrink} from './Components/WarmDrinks';
import {ColdDrink} from './Components/ColdDrink';
import {MenuCategory} from '../../semesteroppgave-ds3801/src/MainCategory';
import {ShowPrice} from '';
import {ShoppingCart} from '';



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