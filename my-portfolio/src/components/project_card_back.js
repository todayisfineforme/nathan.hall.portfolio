import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/project_card.css'

function Project_Card_Back(props){
    return(
        <Paper elevation={23} className={props.background}>
            <Grid container justify="center" style={{height: '50vh'}}>
                <Grid item>
                    <h1 className="cardText">{props.name}</h1>
                </Grid>
                <Grid item>
                    <h2 className="cardText">{props.description}</h2>
                </Grid>
                <Grid item>
                    <Grid container spacing={7} className="cardText">
                        <Grid item>
                            <h2><a target="_blank" href={props.deployed}>Deployed</a></h2>
                        </Grid>
                        <Grid item>
                            <h2><a target="_blank" href={props.github}>Github</a></h2>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Project_Card_Back;