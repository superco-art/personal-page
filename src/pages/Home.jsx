import * as React from 'react'
import profile from "./images/profile.jpg"
import * as AiIcons from "react-icons/ai"
import {IconContext} from "react-icons";


export const Home = () => {
    return (

        <div className="home" >
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

            <h6>Junior Full Stack Developer</h6>
            <p> Welcome to my page</p>
        </div>

    )
}