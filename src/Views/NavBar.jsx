import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

export const NavBar = () => {
    const {area} = useParams();
    const history = useHistory();

    return(
        <div id="nav-bar-container">
            <div
                id="hot-drinks-nav-bar"
                className={`menu-category-btn ${area === 'HotDrinks' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/HotDrins')}
                >
                <h1>Varme Drikker</h1>
            </div>
            <div
                id="cold-drinks-nav-bar"
                className={`menu-category-btn ${area==='ColdDrinks' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/ColdDrinks')}
                >
                <h1>Kalde Drikker</h1>
            </div>
            <div
                id="desserts-nav-bar"
                className={`menu-category-btn ${area==='Desserts' ? 'active-btn' : ''}`}
                onClick={()=> history.push('/MainMenu/Desserts')}
                >
                <h1>Desserter</h1>
            </div>
        </div>
    );
};