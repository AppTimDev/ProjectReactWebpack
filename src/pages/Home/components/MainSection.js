import React from 'react';
import MainSubsection from './MainSubsection'

const MainSection = (props) => {
    const ele = <>
        <div>title</div>
        <div>content</div>
    </>

    const subsection = [
        {
            key: 'links',
            title:'links',
            seeMore: false
        },{
            key: 'projects',
            title:'projects',
            seeMore: true
        },{
            key: 'banner',
            title:'banner',
            seeMore: false
        }
    ]
    return (
        <div>
            MainSection
            {
                subsection.map((obj)=>
                    <MainSubsection title={obj.title} seeMore={obj.seeMore}>
                        {ele}
                    </MainSubsection>
                )
            }
        </div>
    );
};

export default MainSection;