import React from 'react';
import Food from "./images/Food.svg"
import Graph from "./images/Graph.svg"
import Arrow from "./images/Arrow.svg"
import IllustrationRight from "./images/IllustrationRight.svg"
import IllustrationLeft from "./images/IllustrationLeft.svg"
import ChickenHell from "../_globals/images/ChickenHell.svg"
import "./Hero.css"
import "../_globals/components/Purchases/PurchasesDashboard.css"
import PurchasesDashboard from "../_globals/components/Purchases/PurchasesDashboard";

const Hero = () => {
    return (
        <div className={"hero"}>
            <div className={"hero__left"}>
                <div className={"hero__suptitle"}>
                    <div className={"hero__suptitle-line"}></div>
                    <p className={"hero__suptitle-text"}>
                        OVER 1000 USERS
                    </p>
                </div>
                <h1 className={"hero__title"}>
                    Enjoy Foods All Over The
                    <span className={"hero__title-span"}>World</span>
                </h1>
                <p className={"hero__subtext"}>
                    EatLy help you set saving goals, earn cash back offers,
                    Go to disclaimer for more details and get paychecks up to two days early. Get a
                    <span className={"hero__subtext--span"}>$20 bonus.</span>
                </p>
                <div className={"hero__action"}>
                    <button className={"btn btn--primary"}>Get Started</button>
                    <button className={"btn btn--secondary"}>Go Pro</button>
                </div>
            </div>

            <div className={"hero__right"}>
                <img loading="eager" className={"hero__right-food"} src={Food} alt="Food Plate"/>
                <img loading="eager" className={"hero__right-graph"} src={Graph} alt="Graph"/>
                <div className={'hero__right-dashboard'}>
                    <PurchasesDashboard
                        lazyLoading={true}
                        boxShadow={true}
                        img={ChickenHell}
                        date={'3:09 PM'}
                        subtitle={'On The Way'}
                        title={'Chicken Hell'}
                    />
                </div>
                <img loading="eager" className={"hero__right-arrow"} src={Arrow} alt="Arrow"/>
                <img loading="eager" className={"hero__right-illustration--left"} src={IllustrationLeft} alt="Arrow"/>
                <img loading="eager" className={"hero__right-illustration--right"} src={IllustrationRight} alt="Arrow"/>
            </div>
        </div>
    );
};

export default Hero;
