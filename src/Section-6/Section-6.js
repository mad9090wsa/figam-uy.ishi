import React from "react";
import "./Section-6.css";
import rasm from "./img-png-6/Ellipse 59.png";
import rasm1 from "./img-png-6/Ellipse 60.png";
import rasm2 from "./img-png-6/Ellipse 61.png";
import rasm3 from "./img-png-6/Ellipse 62.png";
import rasm4 from "./img-png-6/Ellipse 63.png";
import rasm5 from "./img-png-6/Ellipse 65.png";
let Section6 = () =>{
    return(
        <div className="bir-6">
            <div className="container">
            <text className="text-6">Testimonials</text>
            <div className="rasmimg1">
                <img className="rasm-1" src={rasm}/>
                <img className="rasm-2" src={rasm1}/>
                <div className="kot1"></div>
                <div className="kot2"></div>
                <img className="rasm-3" src={rasm2}/>
                <div className="kot-4"></div>
                <img className="rasm-5" src={rasm3}/>
                <img className="rasm-6" src={rasm4}/>
                <div className="kot-5"></div>
                <img src={rasm5} className="AAA"/>
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