import React from 'react';
import'./Main.scss'

const MainSubsection = (props) => {
    return (
        <div className='main-subsection px-30px py-40px lg:p-40px flex flex-col gap-20px'>
            <div className="flex items-center justify-between">
                <span className="uppercase font-bold text-18px">{props.title}</span>
                {props.seeMore ? <a href={props.link} className="main-subsection-top-more no-link rounded-full uppercase font-bold text-14px py-5px px-20px" target="_blank">See more</a> : <></>}
            </div>            
            {props.children}
        </div>
    );
};

export default MainSubsection;