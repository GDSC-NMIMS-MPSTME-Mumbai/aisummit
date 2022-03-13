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
                            {/* <Card/> */}
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
                            <Iframe2 iframe={video2frame} />
                            {/* <Card/> */}
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
                            <Iframe2 iframe={video3frame} />
                            {/* <Card/> */}
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