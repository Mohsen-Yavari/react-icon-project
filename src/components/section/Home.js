import React from 'react';

import TypeWriterText from "../TypeWriterText";
import CoverVideo from "../CoverVideo";


import About from "./About";
import Roadmap from "./Roadmap";
import ShoeCase from "./ShoeCase";
import Them from "./Them";

const Home = () => {
    return (
        <>

        <section>
            <div class="container container-home">
                <div class="row container-home">
                    <div class="col">
                        <div className="box"><TypeWriterText /></div>
                     
                      
                    </div>
                    <div class="col ">
                        
                        <div ><CoverVideo /></div>
                      
                    </div>

                
                   
                </div>

               
                
    
            </div>
            <About />
            <Roadmap />
            <ShoeCase />
            <Them />
            </section>

          
           
           
        </>
    );
};

export default Home;