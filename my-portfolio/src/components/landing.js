import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/landing.css';
import landingImage from '../images/2019-11-29_16-00-17_000.jpeg';
import Header from './header';

function Landing(){
    return(
        <Container className="landingDiv">
            <Grid container spacing={0}>
                <Grid item xl className="leftDiv">
                    <img src={landingImage} className="landingImg"/>
                </Grid>
                <Grid item xl className="rightDiv">
                    <Header/>
                    <h1>hello</h1>
                    <h2>my name is nathan hall</h2>
                </Grid>
            </Grid>
        </Container>
        
        
    );
}
export default Landing;