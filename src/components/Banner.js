import React from 'react'
import { useState, useEffect } from 'react'
import './Banner.scss'
import Image from './Image'

import Banner0 from '../images/banner_0.jpg'
import Banner1 from '../images/banner_1.jpg'
import Banner2 from '../images/banner_2.jpg'

const Banner = (props) => {
    let img = Banner0
    let link = undefined

    const [count, setCount] = useState(0)
    const [isTimerRun, setIsTimerRun] = useState(true)

    const bubbles = [0, 1, 2]
    const images = [Banner0, Banner1, Banner2]

    useEffect(() => {
        let timer = null
        //console.log('useEffect:');
        if(isTimerRun){
            //console.log('set timer');
            timer = setInterval(() => {                
                setCount((count) => (count + 1) % bubbles.length)
            }, 5000)
        }
        return () => {
            //console.log('clear timer:', !!timer);    
            if(timer){
                clearInterval(timer)
            }        
        }
    }, [isTimerRun])

    const enterBubble = (i) =>{
        //console.log('enter bubble : ', i);
        setCount(i)
        setIsTimerRun(false)        
    }
    const leaveBubble = (i) =>{
        //console.log('leaveBubble: ', i);
        setIsTimerRun(true)
    }

    return (
        <a
            href={link}
            target='_blank'
            className='flex flex-col no-link overflow-hidden'>
            <Image
                id='banner-img'
                className='w-full'
                src={images[count]}
                alt=''
            />
            <div className='bubbles absolute'>
                <ul className='bubbles-list flex flex-nowrap justify-between gap-15px md:gap-30px list-none'>
                    {bubbles.map((i) => {
                        if (count == i) {
                            return (
                                <li key={i} className='bubble bubble-active bubble-size md:bubble-size' onMouseEnter={()=> enterBubble(i)} onMouseLeave={()=> leaveBubble(i)}>
                                    {i}
                                </li>
                            )
                        } else {
                            return (
                                <li key={i} className='bubble bubble-size md:bubble-size' onMouseEnter={()=> enterBubble(i)} onMouseLeave={()=> leaveBubble(i)}>
                                    {i}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </a>
    )
}

export default Banner
