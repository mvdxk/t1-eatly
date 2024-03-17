import React from 'react';
import crumbs from "./images/crumbs.svg";
import './Reviews.css'

const Reviews = () => {
    return (
        <div className={'reviews'}>
            <h2 className={"reviews__title"}>
                <span className={"reviews__title--span"}>Customer</span>
                Say
            </h2>

            <div className={"reviews__cards"}>
                <div className={'reviews__cards-item'}>
                    <div className={"reviews__cards-item-header"}>
                        <h3 className={"reviews__cards-item-header-author"}>@omottley2h</h3>
                        <img loading="lazy" className={"reviews__cards-item-header-crumbs"} src={crumbs} alt="crumbs"/>
                    </div>
                    <p className={'reviews__cards-item-text'}>
                        I cannot believe how I found you, this is so pretty.
                    </p>
                </div>
                <div className={'reviews__cards-scrollable'}>
                    <div className={'reviews__cards-scrollable-list'}>
                        <div className={'reviews__cards-item'}>
                            <p className={'reviews__cards-item-text'}>
                                I cannot believe how I found you, this is so pretty.
                            </p>
                        </div>
                        <div className={'reviews__cards-item'}>
                            <p className={'reviews__cards-item-text'}>
                                I cannot believe how I found you, this is so pretty.
                            </p>
                        </div>
                    </div>
                    <div className={'reviews__cards-scrollable-scrollbar'}>
                        <div className={'reviews__cards-scrollable-scrollbar-active'}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
