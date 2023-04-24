import React, { useState, useEffect, useCallback } from 'react';
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import './slider.scss'

function Slider({ children: images, autoSlide=true,autoSlideInterval=3000}) {
    const [current, SetCurrent] = useState(0)

    const prev = () => SetCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
    const next = useCallback(() => SetCurrent((current) => (current === images.length - 1 ? 0 : current + 1)), [images.length])
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
      }, [autoSlide, autoSlideInterval,next])
    return (
        <div className='slider_container'>
            <div style={{ transform: `translateX(-${current * 100}%)` }} className='slider_container_images'>{images}</div>
            <div className='slider_container_buttons'>
                <img onClick={prev} alt='arrowleft' src={ArrowLeft}></img>
                <img onClick={next} alt='arrowright' src={ArrowRight}></img>
            </div>
            <div className='slider_container_text'><p>{`${current + 1} / ${images.length}`}</p></div>
        </div>
    )
}

export default Slider
