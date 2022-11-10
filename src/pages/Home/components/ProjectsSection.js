import React from 'react'
import ImageCard from '../../../components/ImageCard'
import flowers from '../../../images/flowers-garden.jpg'

const Subsection = (props) => {
    return (
        <div
            style={props.style}
            className='grid gap-20px sm:grid-cols-2 md:grid-cols-3'>
            <ImageCard
                src={flowers}
                alt=''
                link='https://github.com/AppTimDev/ProjectGulp'
                title='Home page'
                content='Source of the home page, responsive layout'
            />
        </div>
    )
}

export default Subsection
