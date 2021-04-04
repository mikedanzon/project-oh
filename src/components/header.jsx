import React from 'react';

function header() {
    return (
        <div className="header-oh">
            <div className="header-oh-logo pl-5">
                <a href="http://localhost:3000/">Logo</a>
            </div>
            <div className="header-oh-menu">
                <a href="http://localhost:3000/#portofolio"><span className="header-porto mr-5">Portofolio</span></a>
                <a href="http://localhost:3000/#about"><span className="mr-5">About</span></a>
                <a href="http://localhost:3000/#contact"><span className="pr-5">Contact</span></a>
            </div>
        </div>
    )
}

export default header;