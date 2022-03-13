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
            <div className="card videocard">
                <div className="Sun">
                    <div id='circle'></div>
                    <div id='circle-blur'></div>
                    <div id='circle-white'></div>
                </div>
                <p className="videop">Hello World!<br />Coding is fun:)  </p>
                <p className="videop">Lorem ipsum dolor elit.</p>
            </div>
        );

    }


    render() {
        return this.state.renderComponent;
    }
}