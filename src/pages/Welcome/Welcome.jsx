import * as React from 'react';
import './Welcome.css'
import Typewriter from "typewriter-effect";
import profile from "../images/profile.jpg";
import {IconContext} from "react-icons";
import * as AiIcons from "react-icons/ai";

export const Welcome = () => {

    return (
        <div className="welcome-page">

            <div className="img-links">
                <div className="image">
                    <img className={"profile-img"} src={profile} alt="imgProfile"/>
                </div>
                    <IconContext.Provider value={{color: "black"}}>
                    <div className="link-icons">
                    <a className="github-icon" href="https://github.com/superco-art" target="_blank" rel="noopener">
                        <AiIcons.AiOutlineGithub />
                    </a>
                    <a className="linkedin-icon"  href="https://www.linkedin.com/in/daniela-trifu" target="_blank" rel="noopener" >
                        <AiIcons.AiOutlineLinkedin />
                    </a>
                    </div>
                    </IconContext.Provider>
                </div>
        <div className="welcome-message" >
            <Typewriter
                onInit={(typewriter)=> {

                    typewriter
                        .typeString("  Hello!  ")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(" I am Daniela ")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("  Junior Full Stack Developer  ")
                        .pauseFor(2000)
                        .start();
                }}
            />
            </div>
            </div>
    )

}



