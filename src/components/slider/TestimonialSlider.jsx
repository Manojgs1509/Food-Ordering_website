import React from 'react'
import Slider from "react-slick";

import ava1 from '../../assets/images/ava-1.jpg'
import ava2 from '../../assets/images/ava-2.jpg'
import ava3 from '../../assets/images/ava-3.jpg'
import ava4 from '../../assets/images/ava-4.jpg'

import '../styles/slider.css'


const TestimonialSlider = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplayspeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (

        <Slider {...settings}>
            <div>
                <p className='review-text'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum eligendi, fugiat quo vero impedit ullam! Aperiam qui non quod a, in accusamus quos, voluptate perferendis id sunt autem quis?"</p>
                <div className='slider-content d-flex align-items-center gap-3'>
                    <img src={ava1} alt="" />
                    <h6>John cena</h6>
                </div>
            </div>
            <div>
                <p className='review-text'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum eligendi, fugiat quo vero impedit ullam! Aperiam qui non quod a, in accusamus quos, voluptate perferendis id sunt autem quis?"</p>
                <div className='slider-content d-flex align-items-center gap-3'>
                    <img src={ava3} alt="" />
                    <h6>Mitchell </h6>
                </div>
            </div>
            <div>
                <p className='review-text'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum eligendi, fugiat quo vero impedit ullam! Aperiam qui non quod a, in accusamus quos, voluptate perferendis id sunt autem quis?:"</p>
                <div className='slider-content d-flex align-items-center gap-3'>
                    <img src={ava2} alt="" />
                    <h6>Mikasa</h6>
                </div>
            </div>
            <div>
                <p className='review-text'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum eligendi, fugiat quo vero impedit ullam! Aperiam qui non quod a, in accusamus quos, voluptate perferendis id sunt autem quis?"</p>
                <div className='slider-content d-flex align-items-center gap-3'>
                    <img src={ava4} alt="" />
                    <h6>Sakura</h6>
                </div>
            </div>

        </Slider>
    )
}

export default TestimonialSlider