import React from "react";
import "./Section-6.css";
import rasm6 from "./img-png-6/rrr.jpg";
let Section6 = () =>{
    return(
        <div className="bir-6">
            <div className="container">
            <text className="text-6">Testimonials</text>
            <div className="rasmimg1">
                <img className="rasm-1" src={rasm6}/>
                <img className="rasm-2" src={rasm6}/>
                <div className="kot1"></div>
                <div className="kot2"></div>
                <img className="rasm-3" src={rasm6}/>
                <div className="kot-4"></div>
                <img className="rasm-5" src={rasm6}/>
                <img className="rasm-6" src={rasm6}/>
                <div className="kot-5"></div>
                <img src={rasm6} className="AAA"/>
            </div>
            <text className="asd">
                <div className="div-cup"></div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leoa.</p>
                <h1>Alina Jesia</h1>
                <h2>DBL Company LTD</h2>
            </text>
            </div>
            <div className="stop"></div>
        </div>
    )
 };


 export default Section6;