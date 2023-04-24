import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
function Card({ id, cover, title }) {
    return (
                    <Link to={`/accomodation/${id}`} className='card'>
                            <img className='card_img' src={cover} alt={title} />
                            <h3>{title}</h3>
                    </Link>
    )
}

export default Card
