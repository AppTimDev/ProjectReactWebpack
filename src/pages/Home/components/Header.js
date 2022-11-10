import React from 'react';
import './Header.scss';
import infoImg from '../../../icons/android-chrome-192x192.png';

const Header = () => {
    return (
        <div className='sticky header'>
            <div className="info px-info sm:px-info lg:px-info py-info sm:py-info md:py-info lg:py-info">
                <div>
                    <img src={infoImg} alt="" className="info-image" />
                </div>
                <div className="info-name">
                    Tim
                </div>
                <div className="info-description">
                    I'm a full-time developer
                </div>

                <div className="tag rounded-full py-8px px-8px lg:py-10px lg:px-10px">
                    <a className="tag-inner link-email no-link rounded-full flex gap-15px items-center py-8px px-15px lg:py-10px lg:px-20px"
                        href="mailto:apptimdev@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
                            <path
                                d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2 8-5H4ZM4 8V6v12Z" />
                        </svg>
                        <span>apptimdev@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;