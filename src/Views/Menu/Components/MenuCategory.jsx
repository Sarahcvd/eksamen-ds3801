import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

export const MenuCategory=()=>{
    const history = useHistory();
    const {area} = useParams();
    const menuCategoryName = ['Dessert', 'Hot Drink', 'Cold Drink'];

    return(
        <div>
            <button
                className={`menu-category-btn ${area==='Dessert' ? 'active-btn' : ''}`}
                onClick={()=> history.push('./MainMenu/Desserts')}>
                {menuCategoryName[0]}
            </button>

            <button
                className={`menu-category-btn ${area==='HotDrink' ? 'active-btn' : ''}`}
                onClick={()=> history.push('./MainMenu/HotDrinks')}>
                {menuCategoryName[1]}
            </button>

            <button
                className={`menu-category-btn ${area==='ColdDrink' ? 'active-btn' : ''}`}
                onClick={()=> history.push('./MainMenu/ColdDrinks')}>
                {menuCategoryName[2]}
            </button>
        </div>
    );
};