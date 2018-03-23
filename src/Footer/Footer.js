import React from 'react';
import './footer.scss';

export const Footer = () => {
    const date = new Date;
    return (
        <React.Fragment>
            <p className="center">&#169;&nbsp;2018-{date.getFullYear()}
                &nbsp;|&nbsp;Made by JS-Bot. All right reserved.
            </p>
        </React.Fragment> 
    )
}