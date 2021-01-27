import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/project_card.css'

function Project_Card_Front(props){

    // const cardStyle = {
    //     float: 'left',
    //     align: 'center',
    //     backgroundImage: `url(${props.project_image})`,
    //     backgroundSize: 'cover'
    // };
 
    console.log(props.project_image)

    return(
        <Paper elevation={23} className={props.background} style={props.style}>
            <div onClick={props.click} className="cardContainer">
                <Grid container className="cardContainer" alignItems="center" justify="center">
                    <Grid item>
                        <p className="cardFrontText">{props.name}</p>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default Project_Card_Front;