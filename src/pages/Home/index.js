import React from 'react';

import Main from './components/Main'
import Header from './components/Header'

import logo from '../../images/cherry-blossom.jpg';
// console.log(logo); 
function Home() {
    return (
        <div className='wrapper'>
            <Header/>
            <Main/>
             <img src={logo} alt="cherry-blossom" />
        </div>
    );
}

export default Home