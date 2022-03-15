import React from 'react';

import Carousel from "../Carousel";

const About = () => {
    return (
        <section>
        <div className="container about__container">
             <div class="row">
                <div class="col">
                <Carousel />
                </div>
                <div class="col about__text ">
                <h3>Welcome To The Weirdos Club</h3>
                <h6>The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                    raits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an amb</h6>
                    <p>The WEIRDOS CLUB is a private colle</p>
                    <button className="btn_about">Joun Our Discoreid</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;