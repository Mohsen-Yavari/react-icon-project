import React from 'react';

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

const ShoeCase = () => {


    return (
        <div class=" showCase" >
        <div class="row">
          <div class="col showCase__item" >
            <div className="showCase__cart"  ><img src={img1} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img2} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img3} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img4} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img5} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img6} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img7} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img8} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img9} alt="" className="showCase__img" /></div>
            <div className="showCase__cart"><img src={img10} alt="" className="showCase__img" /></div>
           
           
            
          </div>
          <div class="col showCase__item" >
          <div className="showCase__cart"><img src={img1} alt="" className="showCase__img1"/></div>
            <div className="showCase__cart"><img src={img2} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img3} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img4} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img5} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img6} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img7} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img8} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img9} alt=""  className="showCase__img1" /></div>
            <div className="showCase__cart"><img src={img10} alt="" className="showCase__img1"  /></div>
            
          </div>
         
        </div>
      </div>
    );
};

export default ShoeCase;