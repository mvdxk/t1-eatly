import React from 'react';
import "./Footer.css"
import LinkedIn from "./images/linked.svg"
import Instagram from "./images/inst.svg"
import Facebook from "./images/facebook.svg"
import Twitter from "./images/twitter.svg"
import {IIcon} from "./types";
import FooterSocial from "./components/FooterSocial";

const Footer = () => {
    const icons: IIcon[] = [
        {id: 1, name: 'Instagram', ico: Instagram},
        {id: 2, name: 'Linked In', ico: LinkedIn},
        {id: 3, name: 'Facebook', ico: Facebook},
        {id: 4, name: 'Twitter', ico: Twitter}
    ]

    return (
        <footer className="footer">
            <div className="footer__rights">
                <p>© 2023 EATLY All Rights Reserved.</p>
            </div>
            <div className="footer__social">
                {icons.map((icon: IIcon) =>
                    <FooterSocial key={icon.id} icon={icon}/>
                )}
            </div>
        </footer>
    );
};

export default Footer;
