import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div>   
            

            <header className="home-hero">
                <h1>Welcome to ReHome Matt</h1>
                <p>Buy and sell second-hand items with ease.Give them a second Home!</p>
                <a href="/sell" className="btn">Sell an item</a>
            </header>

            <section className="featured-section">  
                <h2>Featured Items</h2>
                <div className="item-grid"> 
                   <div className="item-card">
                    <img src="/images/blender.png" alt="Blender image" />
                    <h3>Blender</h3>
                    <p>Price: ksh 12000</p>
                    <p>Condition: Used</p>
                    <button className="buyingButton">Buy</button>
                    
                    </div>
                   <div className="item-card">
                    <img src="/images/camera.jpg" alt="Camera image" />
                    <h3>Camera</h3>
                    <p>Price: ksh 30000</p>
                    <p>Condition: Like New</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                   <div className="item-card">
                    <img src="/images/Cooker.jpg" alt="Cooker image" />
                    <h3>Cooker</h3>
                    <p>Price: ksh 50000</p>
                    <p>Condition: Used</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                   <div className="item-card">
                    <img src="/images/couch.jpg" alt="couch image" />
                    <h3>Couch</h3>
                    <p>Price: ksh 23000</p>
                    <p>Condition: Good</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                   <div className="item-card">
                    <img src="/images/DiningSet.jpg" alt="dining set image" />
                    <h3>Dining Set</h3>
                    <p>Price: Ksh 62000</p>
                    <p>Condition: Used</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                   <div className="item-card">
                    <img src="/images/fridge.jpg" alt="fridge image" />
                    <h3>Fridge</h3>
                    <p>Price: Ksh 49000</p>
                    <p>Condition: Like New</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                   <div className="item-card">
                    <img src="/images/microwave.jpg" alt="microwave image" />
                    <h3>Microwave</h3>
                    <p>Price: ksh 24500</p>
                    <p>Condition: Used</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                   <div className="item-card">
                    <img src="/images/rack.jpg" alt="shoe rack" />
                    <h3>Shoe Rack</h3>
                    <p>Price: Ksh 17000</p>
                    <p>Condition: Good</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                   <div className="item-card">
                    <img src="images/Screen.jpg" alt="tv screen" />
                    <h3>TV Screen</h3>
                    <p>Price: Ksh 51000</p>
                    <p>Condition: Like New</p>
                    <button className="buyingButton">Buy</button>
                    </div>
                     <div className="item-card">
                    <img src="/images/utensilsrack.jpg" alt="rack image" />
                    <h3>Utensils Rack</h3>
                    <p>Price: Ksh 4300</p>
                    <p>Condition: Used</p>
                    <button className="buyingButton">Buy</button>
                    </div>
            </div>
         </section>
    
       
         </div>
    );  
           
};

export default Home;