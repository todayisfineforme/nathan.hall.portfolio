import React, { Component, useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/contact.css';
import landingImage from '../images/2019-11-29_16-00-17_000.jpeg';
import Header from './header';
import contactPicture from '../images/DSC07314.JPG';
import TextField from '@material-ui/core/TextField';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

init("user_rzJ3UEbhGmjP7l9Ix2g7p");

function sendEmail(e) {
    // e.preventDefault();

    emailjs.sendForm('service_r6iwz4m', 'template_uz076q1', e.target, 'user_rzJ3UEbhGmjP7l9Ix2g7p')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

function Contact (){

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    return(
        <Container className="containerDiv">
            <Grid container spacing={0}>
                <Grid item xl className="leftDiv contactLeftDiv">
                    <img src={contactPicture} className="contactImg"/>
                </Grid>
                <Grid item className="rightDiv contactDiv">
                    <Header/>
                    <Grid container className="formDiv">
                        <div className="container-fluid">
                            <div className="row formDiv align-items-center">
                                <form onSubmit={sendEmail}>
                                    <div className="formDiv mb-3 row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="mb-3">
                                                <input 
                                                    placeholder="Your name" 
                                                    type="text" 
                                                    name="from_name"
                                                    className="form-control form-control-lg bg-dark text-white" 
                                                    required 
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    placeholder="Your email"
                                                    type="email"
                                                    name="reply_to"
                                                    className="form-control form-control-lg bg-dark text-white" 
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <textarea
                                                    placeholder="Your Message"
                                                    type="text"
                                                    name="message"
                                                    rows="6"
                                                    className="form-control form-control-lg bg-dark text-white" 
                                                ></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <input className="btn btn-lg btn-outline-light" type="submit" id="submit" value="SUBMIT" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Contact;