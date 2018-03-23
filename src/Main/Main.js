import React from 'react';
import './main.scss';

export const Main = () => {
    return (
        <React.Fragment>
            <div className="w50 h100 fl">Left div 50%</div>
            <div className="w50 h100 fr">Right div 50%</div>
        </React.Fragment>
    )
}