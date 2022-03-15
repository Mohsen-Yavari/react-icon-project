import React from 'react';

import facebook from '../assets/icons8-facebook.svg';
import instagram from '../assets/icons8-instagram.svg';
import linkdin from '../assets/icons8-linkedin.svg';
import twitter from '../assets/icons8-twitter.svg';


const Accordion = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name / Familly <span className="zarb">*</span></label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Phone Number  <span className="zarb">*</span></label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address <span className="zarb">*</span></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password <span className="zarb">*</span></label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Repet Password <span className="zarb">*</span></label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                    
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
                <div className="col ">
                    <h5>come To The Weirdos Club.The WEIRDOS CLUB</h5>
                    <h5>come To The Weirdos Club.The WEIRDOS CLUB</h5>
                    <h5>come To The Weirdos Club.The WEIRDOS CLUB</h5>
                    <h5>come To The Weirdos Club.The WEIRDOS CLUB</h5>
                    <img src ={facebook} alt="" className="facebook" />
                    <img src ={instagram} alt="" className="instagram" />
                    <img src ={linkdin} alt="" className="linkdin" />
                    <img src ={twitter} alt="" className="twitter" />
                </div>
            </div>
            
        </div>
    );
};

export default Accordion;