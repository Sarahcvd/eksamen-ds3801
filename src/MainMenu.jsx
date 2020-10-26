import React, { useState, useEffect } from 'react'
import Beverage from './Beverage';
import Dessert from './Dessert';
import {warmBeverages, coldBeverages, desserts} from './productList';
import './styles.css';

const MainMenu = () => {
    const menuCategoryNames = ["Varm drikke", "Kald drikke", "Dessert"];
    let totalPrice = 1;

    const [menuCategory, setMenuCategory] = useState(menuCategoryNames[0]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        if(menuCategory === menuCategoryNames[0]){
            setMenuItems(warmBeverages.map(warmBeverage =>
                <Beverage 
                    key={warmBeverage.id}
                    name={warmBeverage.size[0].name}
                    price={warmBeverage.size[0].price}
                />))
        }else if(menuCategory === menuCategoryNames[1]){
            setMenuItems(coldBeverages.map(coldBeverage  =>
                <Beverage 
                    key={coldBeverage.id}
                    name={coldBeverage.size[1].name}
                    price={coldBeverage.size[1].price}
                />))
        }else if(menuCategory === menuCategoryNames[2]){
            setMenuItems(desserts.map(dessert =>
                <Dessert 
                    key={dessert.id}
                    name={dessert.name}
                    price={dessert.price}
                />))
        }
    },[menuCategory]);

    return(
        <div>
            <div>
                <button
                    className={`menu-category-button ${menuCategory === menuCategoryNames[0] ? "active-button" : ""}`}
                    onclick={() => setMenuCategory(menuCategoryNames[0])}>
                    {menuCategoryNames[0]}
                </button>
                <button
                    className={`menu-category-button ${menuCategory === menuCategoryNames[1] ? "active-button" : ""}`}
                    onclick={() => setMenuCategory(menuCategoryNames[1])}>
                    {menuCategoryNames[1]}
                </button>
                <button
                    className={`menu-category-button ${menuCategory === menuCategoryNames[2] ? "active-button" : ""}`}
                    onclick={() => setMenuCategory(menuCategoryNames[2])}>
                    {menuCategoryNames[2]}
                </button>
            </div>
            <div>
                <div className="menu-item-container">
                    {menuItems.map(item =>{
                            return<>{item}</>
                    })}
                </div>
            </div>

            {totalPrice > 0 &&
            <div id="total-price-div">
                <div id="total-price-text-div">Totalpris: <b>{totalPrice} kr,-</b></div>
                <button id="go-to-shopping-cart-button">Gå til handlekurv</button>
            </div>
            }
        </div>
    )
}

export default MainMenu;