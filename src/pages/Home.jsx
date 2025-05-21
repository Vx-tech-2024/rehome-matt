import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>   
            <Navbar />

            <header className="home-hero">
                <h1>Welcome to ReHome Matt</h1>
                <p>Buy and sell second-hand items with ease.Give them a second Home!</p>
                <a href="/post" className="btn">Sell an item</a>
            </header>

            <section className="featured-section">  
                <h2>Featured Items</h2>
                <div className="item-grid"> 
                   <div className="item-card">
                    <img src="/images/blender.png" alt="Blender image" />
                    <h3>Blender</h3>
                    <p>Price: $50</p>
                    <p>Condition: Used</p>
                    </div>
                   <div className="item-card">
                    <img src="/images/camera.jpg" alt="Camera image" />
                    <h3>Camera</h3>
                    <p>Price: $200</p>
                    <p>Condition: Like New</p>
                    </div>
                   <div className="item-card">
                    <img src="/images/Cooker.jpg" alt="Cooker image" />
                    <h3>Cooker</h3>
                    <p>Price: $100</p>
                    <p>Condition: Used</p>
                    </div>
                   <div className="item-card">
                    <img src="/images/couch.jpg" alt="couch image" />
                    <h3>Couch</h3>
                    <p>Price: $300</p>
                    <p>Condition: Good</p>
                    </div>
                   <div className="item-card">
                    <img src="/image/Dining Set.jpg" alt="dining set image" />
                    <h3>Dining Set</h3>
                    <p>Price: $150</p>
                    <p>Condition: Used</p>
                    </div>
                   <div className="item-card">
                    <img src="/images/fridge.jpg" alt="fridge image" />
                    <h3>Fridge</h3>
                    <p>Price: $400</p>
                    <p>Condition: Like New</p>
                    </div>
                   <div className="item-card">
                    <img src="/images/microwave.jpg" alt="microwave image" />
                    <h3>Microwave</h3>
                    <p>Price: $80</p>
                    <p>Condition: Used</p>
                    </div>
                   <div className="item-card">
                    <img src="/images/rack.jpg" alt="shoe rack" />
                    <h3>Shoe Rack</h3>
                    <p>Price: $30</p>
                    <p>Condition: Good</p>
                    </div>
                   <div className="item-card">
                    <img src="images/Screen.jpg" alt="tv screen" />
                    <h3>TV Screen</h3>
                    <p>Price: $250</p>
                    <p>Condition: Like New</p>
                    </div>
                     <div className="item-card">
                    <img src="/images/utensilsrack.jpg" alt="rack image" />
                    <h3>Utensils Rack</h3>
                    <p>Price: $20</p>
                    <p>Condition: Used</p>
                    </div>
            </div>
         </section>
    
         <footer />
         </div>
    );  
           
};

export default Home;