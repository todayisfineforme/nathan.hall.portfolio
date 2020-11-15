import React from "react";
import '../styles/header.css'

function header(){
    return(
        <header>
            <a href="/">home</a>
            <a href="/projects">projects</a>
            <a href="/profile">profile</a>
            <a href="/stuff">stuff</a>
        </header>
    )
}
export default header;