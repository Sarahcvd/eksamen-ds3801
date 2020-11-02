import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShowPrice } from '../../Categories/ShowPrice';
import { ShoppingCart } from '../../ShoppingCart';
import { MenuCategory } from '../Menu/Components/MenuCategory';


const MainPage = () =>{
    const menuSectionNames = ['Varm drikke', 'Kald drikke', 'Dessert'];
    let totalPrice = 1;

    //const [menuSection, setMenuSection] = useState(menuSectionNames[0]);
    //const [menuItems, setMenuItems] = useState([]);
    let { area } = useParams();

    const getArea = () => {
    }

    const shoppingCart = () => {
        return ShoppingCart.map((
            orderItem
        ) => (
            <div>{orderItem}</div>
        ));
    }

    return(
        <>
            <div>{shoppingCart}</div>
            <MenuCategory/>
            {getArea()}
            <ShowPrice totalPrice={totalPrice}/>
        </>
    )
    
}

export default MainPage;


/**


THIS IS NOW IN MENU CATEGORY
 return(
        <div className="main-page-container">
            <a href="./Menu/Components/HotDrinks">
                <div id="hot-drinks-container">
                <h1 id="hot-drinks-title">Varme Drikker</h1>
                </div>
            </a>
            <a href="./Menu/Components/ColdDrinks">
                <div id="cold-drinks-container">
                <h1 id="cold-drinks-title">Kalde Drikker</h1>
                <img/>
                </div>
            </a>
            <a href="./Menu/Components/Desserts">
                <div id="desserts-container">
                <h1 id="desserts-title">Desserter</h1>
                <img/>
                </div>
            </a>
        </div>
    )
 */