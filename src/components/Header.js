import React from "react"
import profileLogo from "../images/meepsPNG.png"

export default function Header() {
    return (
        <div className="header--container">
            <img src={profileLogo} alt="logo" width="317px" height = "317px"/>
        </div>
    )
}