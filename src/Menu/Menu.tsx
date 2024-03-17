import React from 'react';
import Logo from "./images/Logo.svg"
import "./Menu.css"

interface IMenuProps {
    isBottom?: boolean
    lazyLoading?: boolean
}

const Menu: React.FC<IMenuProps> = ({isBottom, lazyLoading}) => {
    return (
        <header className={`menu ${isBottom && "menu--bottom"}`}>
            <div className="menu__logo">
                <img
                    loading={lazyLoading ? "lazy" : "eager"}
                    className={`menu__logo-img ${isBottom && "menu__logo-img--bottom"}`}
                    src={Logo}
                    alt="Eatly Logo"
                />
                <a className={`menu__logo-title ${isBottom && "menu__logo-title--bottom"}`} href="#">eatly</a>
            </div>

            <nav className={`menu__links ${isBottom && "menu__links--bottom"}`}>
                {['Recipes', 'FAQ', 'Blog'].map((link: string) => (
                    <a className="menu__links-item" href={`#${link}`}>{link}</a>
                ))}
            </nav>
        </header>
    );
};

export default Menu;
