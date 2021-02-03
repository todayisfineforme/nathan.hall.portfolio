import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/landing.css';
import landingImage from '../images/2019-11-29_16-00-17_000.jpeg';
import Header from './header';

function Landing(){
    return(
        <Container className="containerDiv">
            <Grid container className="landingContainer" spacing={0}>
                <Grid item xl className="leftDiv landingLeftDiv">
                    <img src={landingImage} className="landingImg"/>
                </Grid>
                <Grid item xl alignItems="flex-end" className="rightDiv landingRightDiv">
                    <Header active="home"/>
                    <h1 className="landingH1">Hello</h1>
                    <h2 className="landingH2">My name is Nathan Hall</h2>
                    <h3 className="landingH3">I'm a full stack web developer based in Chicago</h3>
                </Grid>
            </Grid>
        </Container>
        
        
    );
}
export default Landing;