import React from 'react'
import {Github} from './Icons'

const card = (props) => {
    // const styleSheets = {
    //     'background-color': 'var(--bg-color-card-description)'
    // }
    const color = props.color ? props.color : '#000'
    let Icon
    const viewBox = props.viewBox ? props.viewBox : '0 0 24 24'
    const width = props.width ? props.width : '30'
    const height = props.height ? props.height : '30'
    switch (props.icon) {
        case 'Github':
            Icon = (
                <Github
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    fill={color}
                />
            )
            break
        case 'Mail':
            Icon = (
                <Icons.Mail
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    fill={color}
                />
            )
            break
        default:
            break
    }
    return (
        <a
            className='card rounded-20px lg:rounded-30px py-20px px-30px flex gap-30px items-center no-link'
            href={props.link}
            target='_blank'>
            <div className='card-icon'>{Icon}</div>
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
