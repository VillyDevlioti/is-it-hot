import React, { Component } from "react";
import "./Footer.css";


  export default class TwitterCard extends Component {
    render () {
        return (
            <div className="footer col-sm-8">
                    <p>
                        App Developed by Villy Devlioti an amateur full stack developer</p>
                    <p>
                        Checkout my <a href="https://github.com/VillyDevlioti" target="_blank" rel="noopener noreferrer">GitHub </a> 
                        and <a href="https://fewl.agency" target="_blank" rel="noopener noreferrer" >Company Website</a> 
                    </p>
            </div>
        )
    }
}
