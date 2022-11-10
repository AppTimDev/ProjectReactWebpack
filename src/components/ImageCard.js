import React from 'react'

const card = (props) => {
    const styleSheets = {
        'background-color': 'var(--bg-color-card-description)'
    }
    return (
        <a
            href={props.link}
            target='_blank'
            id={props.id}
            style={styleSheets}
            class='rounded-40px flex flex-col no-link overflow-hidden'>
            <img
                class='h-100px object-cover'
                src={props.src}
                alt={props.alt}
                loading={!props.lazy ? '' : 'lazy'}
            />
            <div class='flex flex-col flex-1 uppercase p-20px px-25px'>
                <span class='font-bold'>{props.title}</span>
                <span class='font-semibold opacity-70 text-xs leading-5'>
                    {props.content}
                </span>
            </div>
        </a>
    )
}

export default card
