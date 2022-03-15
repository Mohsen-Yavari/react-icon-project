import React,{useRef} from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Vector from "../Icons/Vector"
import { useLayoutEffect } from 'react';

const DrawSvg = () => { 

    const ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();

    // start svg growing

    svg.style.strokeDasharray = length;

    

    // hide svg

    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"top center",
            end:"bottom bottom",
            onUpdate:(self) =>{
                const draw = length * self.progress;
                // drowing scrool goes up

                svg.style.strokeDashoffset = length - draw;
            }
        }
    })
        return () =>{

        };

    },[])

    return (
        <>
        <div className="ball"></div>
        <div className="draw__svg">
            <Vector />
        </div>
        </>
    );
};

export default DrawSvg;