import React, { useState } from "react";
import '../styles/header.css'

function Header(props){

    return(
        <header>
            <a href="/" className={props.active=='home' && "active"}>home</a>
            <a href="/projects" className={props.active=='projects' && "active"}>projects</a>
            <a href="/resume" className={props.active=='resume' && "active"}>resume</a>
            <a href="/contact" className={props.active=='contact' && "active"}>contact</a>
        </header>
    )
}
export default Header;