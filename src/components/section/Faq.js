import React from 'react';

import Accordion from '../Accordion';

const Faq = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col faq">
                    <h1>faq</h1><br />
             
                    <div className="faq__container">
                       
                            <Accordion />
                        
                      
                    
                    </div>
    
                </div>
            </div>
           
        </div>
    );
};

export default Faq;