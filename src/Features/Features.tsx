import React from 'react';
import "./Features.css"
import {IFeature} from "./types";
import Feature from "./components/Feature";

const Features = () => {
    const features: IFeature[] = [
        {id: 1, title: '10K+', text: 'Satisfied Costumers All Great Over The World'},
        {id: 2, title: '4M', text: 'Healthy Dishes Sold Including Milk Shakes Smooth'},
        {id: 3, title: '99.99%', text: 'Reliable Customer Support We Provide Great Experiences'}
    ]

    return (
        <div className="features">
            <div className="features__wrapper">
                {features.map((feature: IFeature) =>
                    <Feature key={feature.id} feature={feature} />
                )}
            </div>
        </div>
    );
};

export default Features;
