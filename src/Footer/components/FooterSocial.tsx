import React from 'react';
import {IIcon} from "../types";

interface IFooterSocialProps {
    icon: IIcon
}

const FooterSocial: React.FC<IFooterSocialProps> = ({icon}) => {
    const {name, ico} = icon

    return (
        <a href="#">
            <img loading="lazy" src={ico} alt={name}/>
        </a>
    );
};

export default FooterSocial;
