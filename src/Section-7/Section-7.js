import React, { useState } from "react";
import "./Section-7.css";


function Section7() {

  let [bir,setBir] = useState("");
  let [ikki,setIkki] = useState("");
  let [i3,setI3] = useState("");
  let [i4,setI4] = useState("");
  let [i5,setI5] = useState("");
  
//         <input type="text" value={ikki} onChange={(e)=>setIkki(e.target.value)} />


let List7 = (props) => {
    return <text className="li-7">{props.item}{i5}</text>
}  


  return (
     <div className="T34">
       <div className="container">
          <text className="del">Contact Us</text>
          <div className="inp-ada">
            <div>
                <List7 item="Full Name"/>
                  <br/>
                <input placeholder="Enter your full name" type="text" value={bir} onChange={(e)=>setBir(e.target.value)}/>
            </div>
            <div>
                <List7 item="Email Address"/>
                <br/>
                <input placeholder="Enter  your mail" type="text" value={ikki} onChange={(e)=>setIkki(e.target.value)}/>
            </div>
           
            <div>
                <List7 item="Deadline"/>
                <br/>
                <input placeholder="Projects deadline" type="text" value={i3} onChange={(e)=>setI3(e.target.value)}/>
            </div>
            <div>
                <List7 item="Budget"/>
                <br/>
                <input placeholder="Enter  your budget" type="text" value={i4} onChange={(e)=>setI4(e.target.value)}/>
            </div>
    
          </div>
          <div className="sss">
                <List7 item="write us"/>
                 <br/>
                 <textarea placeholder="Enter message here......"value={i5} onChange={(e)=>setI5(e.target.value)}></textarea>
                 <button className="bnt">Submit project</button>
            </div>
       </div>
     </div>
  );
}

export default Section7;