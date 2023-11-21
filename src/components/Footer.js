import React from "react"
import twitterLogo from "../images/twitterLogo.png"
import instagramLogo from "../images/instagramLogo.png"
import facebookLogo from "../images/facebookLogo.png"

export default function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--items">
                <a href="https://twitter.com/EvaaanB">
                    <img src={twitterLogo} alt="error" className="footer--image" />
                </a>
                <a href="https://www.instagram.com/3vanburk3/">
                    <img src={instagramLogo} alt="error" className="footer--image" />
                </a>
                
                <a href="https://www.facebook.com/profile.php?id=100081116610643">
                    <img src={facebookLogo} alt="error" className="footer--image" />
                </a>
                
            </div>
            
            
        </div>
    )
}