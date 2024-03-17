import React from 'react';
import './App.css';
import Menu from "./Menu/Menu";
import Hero from "./Hero/Hero";
import Download from "./Download/Download";
import Features from './Features/Features';
import Footer from "./Footer/Footer";
import Purchases from "./Purchase/Purchases";
import Reviews from "./Reviews/Reviews";
import Restaurants from "./Restaurants/Restaurants";
import FAQs from './FAQ/FAQs';

function App() {
    return (
        <>
            <div className={"container"}>
                <Menu/>
                <Hero/>
            </div>

            <Features/>

            <div className={"container"}>
                <Download/>
                <Restaurants/>
                <Purchases/>
            </div>

            <div className={"container--wrapper"}>
                <Reviews/>
            </div>

            <div className={"container"}>
                <FAQs/>
            </div>

            <div className={"container--grey"}>
                <div className={"container"}>
                    <Menu
                        isBottom={true}
                        lazyLoading={true}
                    />
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default App;
