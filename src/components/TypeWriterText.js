import React from 'react';


// npm i typewriter-effect
import Typewriter from 'typewriter-effect';

const TypeWriterText = () => {
    return (
        <>
        <h4 className="typewritertext__title">Discover a new era of cool</h4>
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
        
        }}
            onInit={(typewriter) => {
                typewriter
                .typeString(`<span class="text-1">Programmer</span>`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(`<span class="text-2"> JavaScript</span>`)
                .pauseFor(2000)
                .deleteAll()
                .typeString( `<span class="text-3"> Mohsen Yavari</span>`)
                .pauseFor(2000)
                .deleteAll()
               
                .start();
  }}
/>
            <p className="typewritertext-p">Try something  new.</p>
            <button className="explore">Explore</button>
      
            
        </>
    );
};

export default TypeWriterText;