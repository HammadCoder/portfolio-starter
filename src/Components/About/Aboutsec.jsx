import React from "react";
import './Aboutsec.css'
import myzoompic from "../../img/myzoompic.jpg"

const Aboutsec = () => {
    return (
        <div className="about" id="about">
            <div className="a-left">
                <div className="a-img">
                    <img src={myzoompic} alt="" />
                </div>
            </div>
            <div className="a-right">
                <div className="a-heading">
                    <h1>About Me</h1>
                </div>
                <div className="a-description">
                    <p>SM College, First Year Commerce | Front-End Developer</p>
                </div>
                <div className="a-info">
                    <p><span>Name:</span> Hammad</p>
                    <p><span>Email:</span> hammadfaisal0000yahoo@gmail.com</p>
                    <p><span>Phone:</span> +92 3272089853</p>
                    <p><span>Residence:</span> Pakistan, Karachi</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutsec