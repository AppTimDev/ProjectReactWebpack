import React from 'react';
import MainSubsection from './MainSubsection'

const MainSection = (props) => {
    const elLink = <>
        <div>links</div>
    </>
    const elProject = <div>elProject</div>

    const subsection = [
        {
            key: 'links',
            title:'links',
            seeMore: false
        },{
            key: 'projects',
            title:'projects',
            seeMore: true,
            link: 'https://github.com/AppTimDev?tab=repositories'
        },{
            key: 'banner',
            title:'banner',
            seeMore: false
        },{
            key: 'gallery',
            title:'gallery',
            seeMore: false
        }
    ]

    const elMap = {
        'links': elLink,
        'projects': elProject,
        'banner': elProject,
        'gallery': elProject
    }
    return (
        <div className='mx-auto max-w-1024px px-10px lg:px-20px flex flex-col gap-40px'>
            {
                subsection.map((obj)=>
                    <MainSubsection key={obj.key} title={obj.title} seeMore={obj.seeMore} link={obj.link}>
                        {elMap[obj.key]}
                    </MainSubsection>
                )
            }
        </div>
    );
};

export default MainSection;