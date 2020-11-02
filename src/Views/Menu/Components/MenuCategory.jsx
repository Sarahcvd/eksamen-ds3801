import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

export const MenuCategory = () => {
    const {area} = useParams();
    const history = useHistory();

    return(
        <div className="main-page-container">
            <div
                id="hot-drinks-container"
                className={`menu-category-btn ${area === 'HotDrinks' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/HotDrins')}
                >
                <h1 id="hot-drinks-title">Varme Drikker</h1>
            </div>
            <div
                id="cold-drinks-container"
                className={`menu-category-btn ${area==='ColdDrinks' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/ColdDrinks')}
                >
                <h1 id="cold-drinks-title">Kalde Drikker</h1>
            </div>
            <div
                id="desserts-container"
                className={`menu-category-btn ${area==='Desserts' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/Desserts')}
                >
                <h1 id="desserts-title-main-page">Desserter</h1>
            </div>
        </div>
    );
};