import React from 'react';

const MainSubsection = (props) => {
    return (
        <div>
            ***********************
            {props.title}
            {props.children}
            {props.seeMore ? <>see more</> : <></>}
            ***********************
        </div>
    );
};

export default MainSubsection;