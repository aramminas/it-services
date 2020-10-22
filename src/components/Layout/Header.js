import React from 'react';
import Navbar from './Navbar'
import './Header.scss';

function Header() {
    return (
        <header>
            <div className={"header-container"}>
                <div className={"header-block-content container"}>
                    <Navbar />
                    <div className={"header-image-container"}>
                        <div className={"header-image-block"}>
                            <img src="/images/header.png" alt="header"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;