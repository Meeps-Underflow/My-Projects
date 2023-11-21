import React from "react"
import emailLogo from "../images/email-logo.jpg"
import linkedinLogo from "../images/linkedinLogo.png"

const linkLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/evan-burke-0b7668262/";
};
const handleEmailClick = () => {
    window.location.href = "mailto:evanburke020@gmail.com";
};
export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main content">Evan Burke</h3>
            <h4 className="main--span--one main content">
                Computer Science Major
            </h4>
            <span className="main--span--two main content">
                University of Massachusetts Lowell
            </span>
            <div className="btn--class">
                    <button onClick={handleEmailClick} className="main--btn btn--email">
                        
                        <img src={emailLogo} alt="error" className="email" />Email
                        
                    </button>
                
                
                
                    <button onClick={linkLinkedIn} className="main--btn btn--linkedin" >
                        
                        <img src={linkedinLogo} alt="error" className="linkedin" />LinkedIn
                        
                    </button>
                
                
                
                
            </div>
            

            <div className="main--about--interests">
                <h3>About</h3>
                <p>Rising Sophmore at the University of Massachusetts Lowell studying Computer Science with a focus in Cyber Security. Cumulative gpa of 3.181 with a skillset consisting of C, HTML, JavaScript, and React.</p>
                <h3>Interests</h3>
                <p>Hoping to step into the computer science field as an intern where I would be more than eager to challange myself and learn new information that can help build the foundation of my career as well as get real world experiance.</p>
            </div>
        </div>

        
    )
}