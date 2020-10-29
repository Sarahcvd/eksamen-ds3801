import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

export const MenuCategory=()=>{
    const history = useHistory();
    const {area} = useParams();
    const menuCategoryName = ['Dessert', 'Warm Drink', 'Cold Drink'];

    return(
        <div>
            <button
                className={`menu-category-btn ${area==='Dessert' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/Dessert')}>
                {menuCategoryName[0]}
            </button>

            <button
                className={`menu-category-btn ${area==='WarmDrink' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/WarmDrink')}>
                {menuCategoryName[1]}
            </button>

            <button
                className={`menu-category-btn ${area==='ColdDrink' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/ColdDrink')}>
                {menuCategoryName[2]}
            </button>
        </div>
    );
};