import React from "react";
import './Intro.css'
import myzoompic from "../../img/myzoompic.jpg"
const Intro = () => {
    return (
        <div className="intro" >
            <div className="i-left" >
                <div className="i-name">
                    <span>Hey! I Am</span>
                </div>
                    <span>Muhammad Hammad</span>
                    <span> Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work..</span>
                    <div className="contact">
                        <button className="button i-btn">Hire Me</button>
                    </div>
            </div>
            <div className="i-right">
                <img src={myzoompic} alt="" />
            </div>
        </div>
    )
}

export default Intro