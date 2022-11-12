import React from 'react'
import Mail from '../icons/mail.svg'
import Github from '../icons/github.svg'
import ReactIcon from '../icons/react.svg'
import Javascript from '../icons/javascript.svg'

const Icon = (props) => {
    const fill = props.fill ? props.fill : '#000'
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
                    fill={fill}
                />
            )
            break
        case 'Mail':
            icon = (
                <Mail
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    fill={fill}
                />
            )
            break
        case 'React':
            icon = (
                <ReactIcon
                    width={width}
                    height={height}
                    fill={fill}
                />
            )
            break
        case 'Javascript':
            icon = (
                <Javascript
                    width={width}
                    height={height}
                    viewBox={props.viewBox ? viewBox: '0 0 48 48'}
                    fill={fill}
                />
            )
            break
        default:
            break
    }
    return icon
}

export default Icon
