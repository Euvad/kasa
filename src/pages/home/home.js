import React from 'react'
import Banner from "../../components/banner/banner"
import Header from '../../components/header/header'
import Gallery from '../../components/gallery/gallery'
import './home.scss'
export default function Home() {
    return (
        <div className='home'>
            <Header/>
            <Banner/>
            <Gallery/>
        </div>
    )
}


