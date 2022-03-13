import React from "react";
import { Component } from "react";
import './Gameframe.css'
import Card from '../Card/Card'

const iframe = `<iframe src="https://i.simmer.io/@Oink/aisummit" style="width:100vw;height:100vh; position: relative;z-index: 1;border: none !important;"></iframe>`;
const video1frame = `<iframe class="videoframe" src="https://www.youtube.com/embed/oLuNjdUiQdQ?wmode=opaque" ></iframe>`;
const video2frame = `<iframe class="videoframe" src="https://www.youtube.com/embed/v5emdCdaDxU?wmode=opaque" ></iframe>`;
const video3frame = `<iframe class="videoframe" src="https://www.youtube.com/embed/HkLfdGGmkxY?wmode=opaque" ></iframe>`;

function Iframe(props) {
    return (<div className="framewrapper" dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}

function Iframe2(props) {
    return (<div className="framewrapper2" dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}

export default class Gameframe extends Component {

    constructor(props) {
        super(props);
        let width = window.innerWidth;
        this.state = {};
        if (width > 1024) {
            this.state.renderComponent = (
                <Iframe iframe={iframe} />
            );
        } else {
            this.state.renderComponent = (
                <div className="wrapper videowrapper">
                    <div className="row video1">
                        <div className="area" >
                            
                            <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <Iframe2 iframe={video1frame} />
                            <Card bimg = "https://yt3.ggpht.com/ytc/AKedOLS_aDNqDAZrbhNB8zdM0KTWkDyWdJ9F4IKp48LJhQ=s900-c-k-c0x00ffffff-no-rj" day="Day 1" title="Life Cycle of a Data Science Project by Krish Naik"/>
                        </div >
                    </div>
                    <div className="row video2">
                        <div className="area area2" >
                            
                            <ul className="circles circles2">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <Iframe2 iframe={video2frame}/>
                            <Card bimg = "https://debanga.github.io/images/debanga-554x576.jpg" day="Day 2" title="Augmented Reality and Artificial Intelligence : Hype vs Reality by Debanga Raj Neog"/>
                        </div >
                    </div>
                    <div className="row video3">
                        <div className="area area3" >
                            
                            <ul className="circles circles3">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <Iframe2 iframe={video3frame}/>
                            <Card bimg = "https://media.wired.com/photos/5c0ee0485021782da245e019/1:1/w_1596,h_1596,c_limit/geoffhinton_14977197.jpg" day="Day 3" title="Adaptation at Multiple Time Scales by Geoffrey Hinton"/>
                        </div >
                    </div>
                </div>
            );
        }
    }

    render() {
        return this.state.renderComponent;
    }

}