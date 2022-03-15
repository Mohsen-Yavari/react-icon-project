import React from 'react';
import {Link} from "react-router-dom"

import instagram from "../assets/icons8-instagram.svg";
import facebook from "../assets/icons8-facebook.svg";
import twitter from "../assets/icons8-twitter.svg";
import linkdin from "../assets/icons8-linkedin.svg";

const Footer = () => {
    return (
        <div className="container footer mt-5 mb-5">
            <div className="row">
                <div className="col">
                <h1 class="navbar-brand logo " style={{fontSize:"3.5rem"}} href="">W.</h1>
                <a href="http://www.facebook.com" target="_blank"><img src={facebook} alt="" /></a>
                <a href="http://www.instagram.com" target="_blank"><img src={instagram} alt="" /></a>
                <a href="http://www.twitter.com" target="_blank"><img src={twitter} alt="" /></a>
                <a href="http://www.linkedin.com" target="_blank"><img src={linkdin} alt="" /></a>
                </div>
                <div className="col">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/roadmap">Roadmap</Link></p>
                    <p><Link to="/team">Them</Link></p>
                   
                </div>
                <div className="col">
                <p><Link to="/about">About</Link></p>
                <p><Link to="/showcase">Showcase</Link></p>
                <p><Link to="/fag">Faq</Link></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>&copy;	- With more than 200+ hand drawn</p>
                </div>
                <div className="col">
                    <p>made with<span>💓</span> Mohsen Yavari </p>
                </div>
            </div>
  
            
        </div>
    );
};

export default Footer;