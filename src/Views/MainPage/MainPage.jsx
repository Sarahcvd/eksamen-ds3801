import React from 'react';

const MainPage = () =>{
    return(
        <div className="main-page-container">
            <div id="hot-drinks-container">
                <h1 id="hot-drinks-title">Varme Drikker</h1>
            </div>
            <div id="cold-drinks-container">
                <h1 id="cold-drinks-title">Kalde Drikker</h1>
                <img/>
            </div>
            <div id="desserts-container">
                <h1 id="desserts-title">Desserter</h1>
                <img/>
            </div>
        </div>
    )
}

export default MainPage;