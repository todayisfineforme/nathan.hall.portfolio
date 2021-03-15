import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../styles/contact.css';
import Header from './header';
import contactPicture from '../images/DSC07314.JPG';
import emailjs from 'emailjs-com';


function Contact (){

    const [messageSent, setMessageSent] = useState("");

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_r6iwz4m', 'template_uz076q1', e.target, 'user_rzJ3UEbhGmjP7l9Ix2g7p')
            .then((result) => {
                console.log(result.text);
                setMessageSent("sent");
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <Container className="containerDiv">
            <Grid container spacing={0}>
                <Grid item xl className="leftDiv contactLeftDiv">
                    <img src={contactPicture} alt="decorative business sign that says satellite on it" className="contactImg"/>
                </Grid>
                <Grid item className="rightDiv contactDiv">
                    <Header active="contact"/>
                    <Grid container className="formDiv">
                        <div className="container-fluid">
                            <div className="row formDiv align-items-center">
                                <form onSubmit={sendEmail}>
                                    <div className="formDiv mb-3 row justify-content-center">
                                        {messageSent === "sent" &&
                                            <div className="col-lg-8">
                                                <div class="alert" role="alert">
                                                    <h2>Thank you, We'll be in touch!</h2>
                                                </div>
                                            </div>
                                        }
                                        <div className="col-lg-8">
                                            <h3>Contact me at:</h3>
                                            <h3><a className="email" href="mailto: nathanhallcodes@gmail.com">NathanHallCodes@gmail.com</a></h3>
                                            <h3><a className="email" href="https://www.linkedin.com/in/todayisfine" target="_blank">www.linkedin.com/in/todayisfine</a></h3>
                                            <br/>
                                            <h3>or fill out this form</h3>
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