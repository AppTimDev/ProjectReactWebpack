import React from 'react';

const Subsection = (props) => {
    return (
        <div style={props.style} className='grid gap-20px sm:grid-cols-2 md:grid-cols-3'>
            pro
            {props.id}
        </div>
    );
};

export default Subsection;