import React from 'react';
import Image from '../../../components/Image'

import japCherry from '../../../images/japanese-cherry.jpg'
import magnolia from '../../../images/magnolia.jpg'
import cherry from '../../../images/cherry-blossom.jpg'
import cherry2 from '../../../images/cherry-blossom-2.jpg'
import trees from '../../../images/trees.jpg'

const Subsection = (props) => {
    return (
        <div className='grid md:grid-cols-3 md:auto-rows-min gap-20px'>
            <Image className='w-full h-120px md:h-full' src={japCherry} alt="" rounded='4' square/>
            <Image className='w-full h-200px md:h-full' src={magnolia}  alt="" rounded='10' square/>
            <div className="grid gap-15px">
                <Image className='w-full h-100px md:h-120px' src={cherry}  alt="" rounded='10' square/>
                <div className="grid gap-15px grid-cols-2">
                    <Image className='w-full h-full' src={cherry2}  alt="" rounded='2' square/>
                    <Image className='w-full h-full' src={trees}  alt="" rounded='2' square/> 
                </div>
            </div>
        </div>
    );
};

export default Subsection;