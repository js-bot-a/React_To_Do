import React from 'react';
import './aside.scss';

export const Aside = () => {
    return (
        <React.Fragment>
            <h4 className="center">This is Aside</h4>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </React.Fragment>   
    )
}