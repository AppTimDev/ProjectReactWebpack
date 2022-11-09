import React from 'react';
import Header from './Header'

import Main from './Main'
import logo from '../images/cherry-blossom.jpg';
console.log(logo); 

export function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <Main/>
             <img src={logo} alt="cherry-blossom" />
        </div>
    );
}