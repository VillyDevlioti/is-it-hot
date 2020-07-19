import React, { Component } from "react";
import {Animated} from "react-animated-css";
import "./WeatherCard.css";


export default class TwitterCard extends Component {
    render () {
        let text = this.props.text;
        let animation = this.props.animation;
        return (
            <div className="col-sm-8">
                <Animated animationIn={animation} isVisible={true}> 
                    <div className="weather-card">
                        <div className="weather-card-body"> 
                            <h1>{text}</h1>
                        </div>
                    </div>
                </Animated>
            </div>
        )
    }
}


