import React from 'react';
import ReactDom from 'react-dom';
import { Navigation } from './Navigation';

const component = (
    <div>
        <h1>Hello</h1>
        <Navigation />
    </div>

)
      

ReactDom.render(component, document.getElementById('app'));

