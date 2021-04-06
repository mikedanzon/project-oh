import React from 'react';
import Logo from '../assets/img/logo.svg';
import { URL_LOCALHOST } from '../helper/url';

function header() {
    return (
        <div className="header-oh">
            <div className="header-oh-logo pl-5">
                <a href={URL_LOCALHOST}><img src={Logo} alt="logo"/></a>
            </div>
            <div className="header-oh-menu">
                <a href={`${URL_LOCALHOST}/#portofolio`}><span className="header-porto mr-5">Portofolio</span></a>
                <a href={`${URL_LOCALHOST}/#about`}><span className="mr-5">About</span></a>
                <a href={`${URL_LOCALHOST}/#contact`}><span className="pr-5">Contact</span></a>
            </div>
        </div>
    )
}

export default header;