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
                    <div id='circle' style={{background: "url(" +  this.props.bimg + ")", backgroundSize: "100px 100px"}}></div>
                    <div id='circle-blur'></div>
                    <div id='circle-white'></div>
                </div>
                <p className="videop">{this.props.day}<br />{this.props.title}</p>
                <p className="videop"></p>
            </div>
        );

    }


    render() {
        return this.state.renderComponent;
    }
}