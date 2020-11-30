import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../styles/projects.css'

function Projects(){
    return(
        <Container className="containerDiv">
            <Grid container spacing={0} className="projects">
                <Grid item className="projectDiv">
                    <h1>Projects Page</h1>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Projects;