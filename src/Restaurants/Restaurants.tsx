import React from 'react';
import TopLunchCard from "../_globals/components/TopLunch/TopLunchCard";
import ChickenKing from "./images/ChickenKing.svg";
import "../_globals/components/TopLunch/TopLunchCard.css"
import "./Restaurants.css";
import {IItem} from "./types";

const RestaurantItem: IItem[] = [
    {id: 1, title: 'The Chicken King', tag: 'Pizza', date: '24min •',evaluation:'4.8', ico: ChickenKing},
    {id: 2, title: 'The Chicken King', tag: 'Pizza', date: '24min •',evaluation:'4.8', ico: ChickenKing},
    {id: 3, title: 'The Chicken King', tag: 'Pizza', date: '24min •',evaluation:'4.8', ico: ChickenKing}
]
const Restaurants = () => {
    return (
        <div className={'restaurants'}>
            <h2 className={'restaurants__title'}>Our Top <span className={'restaurants__title-span'}>Lunch</span></h2>
            <div className={'restaurants__bottom'}>
                {RestaurantItem.map((item: IItem) =>
                    <TopLunchCard
                        lazyLoading={true}
                        img={item.ico}
                        date={item.date}
                        tag={item.tag}
                        title={item.title}
                        evaluation={item.evaluation}
                    />
                )}
            </div>
        </div>
    );
};

export default Restaurants;