import React from 'react';

import ConfettiComponent from "../ConfettiComponent";


import img1 from '../../assets/Nfts/bighead.svg';
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";


const Them = () => {
    return (
        <section className="them">
            <ConfettiComponent />
        <h1>roadmap</h1>
        <div className="container ">
            <div className="row">
                <div className="col them_col">
                   
                    <div className="them__img">
                    <img src={img1} alt="" />
                    <h4>Name:</h4>
                    <p>Mahsa</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img2} alt="" />
                    <h4>Name:</h4>
                    <p>Ali</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img3} alt="" />
                    <h4>Name:</h4>
                    <p>Shiva</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img4} alt="" />
                    <h4>Name:</h4>
                    <p>Ziba</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img5} alt="" />
                    <h4>Name:</h4>
                    <p>Abbas</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img6} alt="" />
                    <h4>Name:</h4>
                    <p>Majid</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img7} alt="" />
                    <h4>Name:</h4>
                    <p>Mahmood</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img8} alt="" />
                    <h4>Name:</h4>
                    <p>Iman</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img9} alt="" />
                    <h4>Name:</h4>
                    <p>Ahmad</p>
                    </div>
                
                    <div className="them__img">
                    <img src={img10} alt="" />
                    <h4>Name:</h4>
                    <p>Mahsa</p>
                    </div>
                
                   

                </div>
            </div>
            
            </div>
            </section>
    );
};

export default Them;