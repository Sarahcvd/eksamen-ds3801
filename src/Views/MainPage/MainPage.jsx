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