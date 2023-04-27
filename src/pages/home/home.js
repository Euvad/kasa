import React from 'react'
import Banner from "../../components/banner/banner"
import Gallery from '../../components/gallery/gallery'
import bgimage from '../../assets/home_cover.png';
import './home.scss'
export default function Home() {
    return (
        <div className='home'>
            <Banner bgimage={bgimage}/>
            <Gallery/>
        </div>
    )
}


