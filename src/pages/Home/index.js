import React from 'react';

import Main from './components/Main'
import Header from './components/Header'

function Home() {
    return (
        <div className='wrapper'>
            <Header/>
            <Main/>
        </div>
    );
}

export default Home