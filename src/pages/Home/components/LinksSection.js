import React from 'react';
import IconCard from '../../../components/IconCard'

const Subsection = (props) => {
    return (
        <div className='grid gap-20px sm:grid-cols-2 md:grid-cols-3'>
            <IconCard icon='Github' title='Github' content='@AppTimDev' link='https://github.com/AppTimDev'/>
        </div>
    );
};

export default Subsection;