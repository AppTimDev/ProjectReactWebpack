import React from 'react'

const card = (props) => {
    const styleSheets = {
        backgroundColor: 'var(--bg-color-card-description)'
    }
    return (
        <a
            href={props.link}
            target='_blank'
            id={props.id}
            style={styleSheets}
            className='rounded-40px flex flex-col no-link overflow-hidden'>
            <img
                className='h-100px object-cover'
                src={props.src}
                alt={props.alt}
                loading={!props.lazy ? '' : 'lazy'}
            />
            <div className='flex flex-col flex-1 uppercase p-20px px-25px break-words'>
                <span className='font-bold'>{props.title}</span>
                <span className='font-semibold opacity-70 text-xs leading-5'>
                    {props.content}
                </span>
            </div>
        </a>
    )
}

export default card
