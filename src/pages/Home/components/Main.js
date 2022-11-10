import React from 'react';
import MainSection from './MainSection'
import Footer from './Footer'
import'./Main.scss'

const main = () => {
    return (
        <div className='main sticky-smooth py-15px pb-80px lg:pt-50px'>
            <MainSection/>
            <Footer/>
        </div>
    );
};

export default main;