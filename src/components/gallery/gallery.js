import './gallery.scss'
import data from '../../data/data'
import Card from '../card/card'

import React from 'react'

function Gallery() {
    return (
        <main className='gallery'>
            {
                data.map(data => {
                    return (
                        <Card
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            cover={data.cover}
                        />
                    )
                })}
        </main>
    )
}

export default Gallery
