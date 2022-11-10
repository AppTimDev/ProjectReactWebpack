import React from 'react'
import Icon from './Icon'

const card = (props) => {
    // const styleSheets = {
    //     'background-color': 'var(--bg-color-card-description)'
    // }
    const width = props.width ? props.width : '30'
    const height = props.height ? props.height : '30'
    const icon = (
        <Icon
            icon={props.icon}
            width={width}
            height={height}
            viewBox={props.viewBox}
            fill={props.color}
        />
    )
    return (
        <a
            className='card rounded-20px lg:rounded-30px py-20px px-30px flex gap-30px items-center no-link'
            href={props.link}
            target='_blank'>
            <div className='card-icon'>{icon}</div>
            <div className='flex flex-col gap-5px'>
                <span className='font-bold text-18px'>{props.title}</span>
                <span className='font-semibold tracking-wider text-11px opacity-70'>
                    {props.content}
                </span>
            </div>
        </a>
    )
}

export default card
