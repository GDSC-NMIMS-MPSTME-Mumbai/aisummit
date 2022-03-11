import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Card.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default class Card extends Component {
   componentDidMount() {

   }

    constructor(props) {
        super(props);
        this.state = {};
        this.state.renderComponent = (
            <Swiper 
                className="blog-slider"
                spaceBetween={30}
                effect='fade'
                loop='true'
                mousewheel={{ invert: false }}
                pagination={{ clickable: true }}
            >
                <div className="blog-slider__wrp swiper-wrapper">
                    <SwiperSlide className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt="" />
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="" />
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                        </div>
                    </SwiperSlide>

                </div>
            </Swiper>
            
        );

    }


    render() {
        return this.state.renderComponent;
    }
}