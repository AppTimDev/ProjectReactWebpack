import React from 'react';
import MainSubsection from './MainSubsection'
import LinksSection from './LinksSection'
import ProjectsSection from './ProjectsSection'
import BannerSection from './BannerSection'
import GallerySection from './GallerySection'

const MainSection = (props) => {
    const subsection = [
        {
            key: 'links',
            title:'links',
            seeMore: false,
            ele: <LinksSection/>
        },{
            key: 'projects',
            title:'projects',
            seeMore: true,
            link: 'https://github.com/AppTimDev?tab=repositories',
            ele: <ProjectsSection/>
        },{
            key: 'banner',
            title:'banner',
            seeMore: false,
            ele: <BannerSection/>
        },{
            key: 'gallery',
            title:'gallery',
            seeMore: false,
            ele: <GallerySection/>
        }
    ];
    return (
        <div className='mx-auto max-w-1024px px-10px lg:px-20px flex flex-col gap-40px'>
            {
                subsection.map((obj)=>
                    <MainSubsection key={obj.key} title={obj.title} seeMore={obj.seeMore} link={obj.link}>
                        {obj.ele}
                    </MainSubsection>
                )
            }
        </div>
    );
};

export default MainSection;