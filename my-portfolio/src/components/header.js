import React, { Component } from "react";

class header extends Component{
    state = {}
    render (){
        return(
            <header>
                <a href="/">home</a>
                <a href="/projects">projects</a>
                <a href="/profile">profile</a>
                <a href="/stuff">stuff</a>
            </header>
        );
    }
}
export default header;