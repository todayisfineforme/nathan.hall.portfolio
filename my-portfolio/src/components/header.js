import React from "react";
import '../styles/header.css'

function header(){
    return(
        <header>
            <a href="/">home</a>
            <a href="/projects">projects</a>
            <a href="/resume">resume</a>
            <a href="/contact">contact</a>
        </header>
    )
}
export default header;