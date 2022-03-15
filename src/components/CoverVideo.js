import React from 'react';

import Gif from '../assets/Home Video.mp4';

const CoverVideo = () => {
    return (
        <>
            <div className="container__video" >
            <video src={Gif} type="video/mp4"  autoPlay muted loop />
            </div>
            
   
        </>
    );
};

export default CoverVideo;