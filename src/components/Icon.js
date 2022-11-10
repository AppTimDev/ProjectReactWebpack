import React from 'react'
import Mail from '../icons/mail.svg'
import Github from '../icons/github.svg'

const Icon = (props) => {
    const color = props.color ? props.color : '#000'
    let icon
    const viewBox = props.viewBox ? props.viewBox : '0 0 24 24'
    const width = props.width ? props.width : '24'
    const height = props.height ? props.height : '24'
    switch (props.icon) {
        case 'Github':
            icon = (
                <Github
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    fill={color}
                />
            )
            break
        case 'Mail':
            icon = (
                <Mail
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
    return icon
}

export default Icon
