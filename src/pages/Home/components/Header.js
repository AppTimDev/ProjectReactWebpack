import React from 'react'
import './Header.scss'
import infoImg from '../../../icons/android-chrome-192x192.png'
import Icon from '../../../components/Icon'

const Header = () => {
    return (
        <div className='sticky header'>
            <div className='info px-info sm:px-info lg:px-info py-info sm:py-info md:py-info lg:py-info'>
                <div>
                    <img src={infoImg} alt='' className='info-image' />
                </div>
                <div className='info-name'>Tim</div>
                <div className='info-description'>
                    I'm a full-time developer
                </div>

                <div className='tag rounded-full py-8px px-8px lg:py-10px lg:px-10px'>
                    <a
                        className='tag-inner link-email no-link rounded-full flex gap-15px items-center py-8px px-15px lg:py-10px lg:px-20px'
                        href='mailto:apptimdev@gmail.com'>
                        <Icon icon='Mail' />
                        <span>apptimdev@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
