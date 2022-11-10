import React from 'react';

const Image = (props) => {
    let clName = props.className ? props.className : ''
    if(props.square){
        clName+= ' aspect-square'
    }
    clName+= !props.cover ? ' object-cover' : ''
    
    switch (props.rounded) {
        case '2':            
            clName+= ' rounded-20px'
            break;
        case '4':            
            clName+= ' rounded-40px'
            break;
        case '10':
            clName+= ' rounded-full'
            break;    
        default:
            break;
    }

    return (
        <img id={props.id} className={clName} src={props.src} alt={props.alt} loading={!props.lazy ? '' : 'lazy'}/>
    );
};

export default Image;