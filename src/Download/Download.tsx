import React from 'react';
import './Download.css'
import Mobile from "./images/mobile.svg";
import Arrow from "./images/twisted-arrow.svg";
import BtnArrow from "./images/btn-arrow.svg";

const Download = () => {
    return (
        <div className={'download'}>
            <div className={'download__left'}>
                <img loading="lazy" className={"download__left-mobile"} src={Mobile} alt="Mobile Phone"/>
            </div>
            <div className={'download__right'}>
                <h2 className={"download__title"}>
                    Premium
                    <span className={"download__title--span"}>Quality</span>
                    For Your Health
                </h2>
                <ul className={"download__list"}>
                    <li className={"download__list-item"}>
                        Premium quality food is made with ingredients
                        that are packed with essential vitamins, minerals.
                    </li>
                    <li className={"download__list-item"}>
                        These foods promote overall wellness by support
                        healthy digestion and boosting immunity
                    </li>
                </ul>
                <button className={'btn btn--arrow'}>
                    Download
                    <img loading="lazy" className={"download__right-btn-arrow"} src={BtnArrow} alt="Button Arrow"/>
                </button>
                <img loading="lazy" className={"download__right-twisted"} src={Arrow} alt="Arrow"/>
            </div>
        </div>
    );
};

export default Download;
