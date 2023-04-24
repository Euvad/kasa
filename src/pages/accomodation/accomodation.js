import React from 'react'
import Slider from '../../components/slider/slider'
import Header from '../../components/header/header'
import Accordion from '../../components/accordion/accordion'
import data from '../../data/data'
import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import greyStar from '../../assets/grey_star.png'
import redStar from '../../assets/red_star.png'
function Accomodation() {

    const [images, setImages] = useState([]);
    const pageId = useParams('id').id;
    const dataItem = data.filter(dataItem => dataItem.id === pageId);
    const name = dataItem[0].host.name.split(' ');
    const rating = dataItem[0].rating;
    const description = dataItem[0].description;
    const equipments = dataItem[0].equipments;
    useEffect(() => {
        const dataItem = data.filter(dataItem => dataItem.id === pageId);
        setImages(dataItem[0].pictures);
    }, [pageId]);
    return (
        <div className='accomodation'>
            <Header />
            <Slider autoSlide={true} autoSlideInterval={3000}>
                {
                    images.map((item, i) => (
                        <img key={i} className='image1' alt='sliderimage' src={item} />
                    ))
                }
            </Slider>
            <div className='accomodation_box'>
            <div className="accomodation_content">
                <h1>{dataItem[0].title}</h1>
                <p>{dataItem[0].location}</p>
                <ul className='accomodation_content_list'>
                    {dataItem[0].tags.map((tag, index) => {
                        return (
                            <li className='accomodation_content_list_item' key={index}>{tag}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="accomodation_host">
						<div className='accomodation_host_info'>
							<div className='accomodation_host_info_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
                            <div className='accomodation_host_info_picture'>
							<img src={dataItem[0].host.picture} alt="host of this accomodation" />
                            </div>
						</div>
							
						<div className="accomodation_host_stars">
							{[...Array(5)].map((_, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
            </div>

            <div className="accomodation_accordion">
                                <div className="accomodation_accordion_item">
                                    <Accordion title={'Description'} content={description} />
                                </div>
                                <div className="accomodation_accordion_item">
                                    <Accordion title={'Équipements'} content={equipments} />
                                </div>
            </div>
        </div>
    )
}

export default Accomodation
