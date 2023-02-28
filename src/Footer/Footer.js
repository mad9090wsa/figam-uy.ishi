import React,{ useState } from "react";
import "./Footer.css";
import img from "./img/Logo.png";
import img1 from "./img/Fac.png";
import img2 from "./img/Ins.png";
import img3 from "./img/Twi.png";
import img4 from "./img/You.png";
let Footer = ()=>{
    let [eee,setEee] = useState("");
    return(
        <div className="Footer">
           <div className="container">
               <div className="logo-foo">
                  <div className="foo-loga"><img className="loga-imgf" src={img}/><text className="text-loga">Designzcy</text></div>
                  <text className="text-cont-loga">Metairie, 3689  Bassel Street, LA, Louisiana</text>
                  <text className="text-cont-loga2">Contact us: 225-788-5489</text>
                  <div className="link-loga"><img className="Link-img" src={img1}/><img className="Link-img" src={img2}/><img className="Link-img" src={img3}/><img className="Link-img" src={img4}/></div>
               </div>
               <ul>
                <li className="ada-li">Category</li>
                <li className="li-ul-text">Home</li>
                <li className="li-ul-text">About</li>
                <li className="li-ul-text">Services</li>
                <li className="li-ul-text">Reviews</li>
                <li className="li-ul-text">Article</li>
               </ul>
               <ul>
               <li className="ada-li">About</li>
                <li className="li-ul-text">Partners</li>
                <li className="li-ul-text">Careers</li>
                <li className="li-ul-text">Press</li>
                <li className="li-ul-text">Community</li>
                <li className="li-ul-text">Support</li>
               </ul>
               <div className="text-ff-bnt">
                <text className="tttfff-bnt">Subscribe newsletter</text>
                <text className="tttfff-bnt1">Sign up for tips, new offers, and exclusive promos.</text>
                <input className="inp-bnt-fff" type="text" placeholder="Enter your email" value={eee} onChange={(e)=>setEee(e.target.value)}/>
                <button className="bnt-f">Subcribe{eee}</button>
               </div>
           </div>
           <hr className="hr"/>
           <div className="div-ffffff">
                 <text className="tfr">© 2021 Designzcy - All rights reserved.</text>
                 <ul className="tre-ul">
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                 </ul>
           </div>
        </div>
    )
}
export default Footer;