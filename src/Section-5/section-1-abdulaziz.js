import React from "react";
import "./section-1-abdulaziz.css";
import img1 from "./img-1-abdulaziz/im1.png";
import img2 from "./img-1-abdulaziz/im2.png";
import img3 from "./img-1-abdulaziz/im3.png";
import img4 from "./img-1-abdulaziz/im4.png";
import img5 from "./img-1-abdulaziz/Fb.png";
import img6 from "./img-1-abdulaziz/Ld.png";
import img7 from "./img-1-abdulaziz/Tw.png";

let Text1 = (props) => {
    return <text className="li-text">{props.item}<br/><h5>{props.twxt}</h5></text>
}  

let Rasmcat = () =>{
   return(
       <div className="bir-5">
            <div className="container">
                <text className="text-bir5">Meet Our Team</text>
                <div className="cart-bir5">
                    <div className="ada-cart"><img className="img-bir5" src={img1}/><Text1 item="Amanda Linda"     twxt="Executive officer"/><div className="a-link"><img src={img5}/><img src={img6}/><img src={img7}/></div></div>
                    <div className="ada-cart"><img className="img-bir5" src={img2}/><Text1 item="Alex Smith"       twxt="Executive officer"/><div className="a-link"><img src={img5}/><img src={img6}/><img src={img7}/></div></div>
                    <div className="ada-cart"><img className="img-bir5" src={img3}/><Text1 item=" Anthony Fauci"   twxt="Executive officer"/><div className="a-link"><img src={img5}/><img src={img6}/><img src={img7}/></div></div>
                    <div className="ada-cart"><img className="img-bir5" src={img4}/><Text1 item=" Anthony Fauci"   twxt="Executive officer"/><div className="a-link"><img src={img5}/><img src={img6}/><img src={img7}/></div></div>
                </div>
            </div>
       </div>
   )
};
export default Rasmcat;