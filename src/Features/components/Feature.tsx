import React from 'react';
import "./Feature.css"
import {IFeature} from "../types";

interface IFeatureProps {
    feature: IFeature
}

const Feature: React.FC<IFeatureProps> = ({feature}) => {
    const {title, text} = feature

    return (
        <div className="feature">
            <div className="feature__title">{title}</div>
            <div className="feature__text">{text}</div>
        </div>
    );
};

export default Feature;
