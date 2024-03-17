import React from 'react';
import './Purchases.css';
import PurchasesDashboard from "../_globals/components/Purchases/PurchasesDashboard";
import Purchase from './images/Purchases.svg';
import ChickenHell from "../_globals/images/ChickenHell.svg";
import SweDish from "./images/swe.svg";
import FishHell from "./images/fish.svg";
import { IItem } from './types';

const DashboardItem: IItem[] = [
    {id: 1, title: 'Chicken Hell', status:'On The Way',date:'3:09 PM',ico: ChickenHell},
    {id: 2, title: 'Swe Dish', status:'Delivered',date:'Yesterday',ico: SweDish},
    {id: 3, title: 'Fish Hell Veg', status:'Cancelled',date:'Yesterday',ico: FishHell},
]
const Purchases = () => {
    return (
        <div className={'purchases'}>
            <div className={'purchases__left'}>
                <h2 className={'purchases__left-title'}>
                    Control
                    <span className={'purchases__left-title--span'}>Purchases</span>
                    Via Dashboard
                </h2>
                <div className={'purchases__left-dashboard'}>
                    {DashboardItem.map((item: IItem) =>
                        <PurchasesDashboard
                            lazyLoading={true}
                            boxShadow={false}
                            red={item.status === 'Cancelled'}
                            img={item.ico}
                            date={item.date}
                            subtitle={item.status}
                            title={item.title}
                        />
                    )}
                </div>
            </div>
            <div className={'purchases__right'}>
                <img className={'purchases__right-img'} loading={"lazy"} alt={'purchases'} src={Purchase}/>
            </div>
        </div>
    );
};

export default Purchases;