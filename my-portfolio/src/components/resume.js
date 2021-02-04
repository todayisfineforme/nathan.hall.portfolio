import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import '../styles/resume.css';
import resumePicture from '../images/DSC07360.JPG';

class Resume extends Component{
    state = {}
    render (){
        return(
            <Container className="containerDiv">
                <Grid container spacing={0}>
                    <Grid item xl className="leftDiv resumeLeftDiv">
                        <img src={resumePicture} alt="nathan hall looing at old business signs" className="resumeImg"/>
                    </Grid>
                    <Grid item xl className="rightDiv resumeRightDiv">
                        <Header active="resume"/>
                        <Grid item className="resume">
                            <h1 className="resumeH1">Nathan Hall</h1>
                            <p className="resumeP">Chicago, Illinois 60613 · he/him/his · nathanhallcodes@gmail.com</p>
                            <hr/>
                            <br/>
                            <h2 className="resumeH2">Summary</h2>
                            <hr/>
                            <p className="resumeP">Full Stack Web Developer with a performing arts and automotive background. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for strong wit and attention to detail no matter the complexity of the project. Team player as well as ability to work independently.</p>
                            <br/>
                            <h2 className="resumeH2">Technical Skills</h2>
                            <hr/>
                            <p className="resumeP">HTML, CSS, Bootstrap, JS, MySQL, MongoDB, ReactJS, NodeJS, Express, Git, Microsoft Office, Excel, PowerPoint, Slack, Zoom, Google Hangouts, Remo, Cisco Webex, Adobe Premiere, Audacity</p>
                            <br/>
                            <h2 className="resumeH2">Experience</h2>
                            <hr/>
                            <h3 className="resumeH3">Gold Coast Auto Body – Chicago, IL</h3>
                            <h3 className="resumeH3">February 2017 – March 2020</h3>
                            <h4 className="resumeH4">Vehicle Damage Estimator and Insurance Liaison</h4>
                            <ul className="resumeUL">
                                <li>Compiled complete repair estimates that took into account required manufacturer repair procedures</li>
                                <li>Cultivated and maintained long term business relationships with customers</li>
                                <li>Addressed problems and easily adapted to solve any challenges due to changing customer demands</li>
                            </ul>
                            <h3 className="resumeH3">Abra Auto Body & Glass – Chicago, IL</h3>
                            <h3 className="resumeH3">February 2015 – January 2017</h3>
                            <h4 className="resumeH4">Estimator and Customer Service Manager</h4>
                            <ul className="resumeUL">
                                <li>Maintained constant communication with customers via phone calls, and emails through the entire repair process. Handling upwards of 30 - 40 customers per week</li>
                                <li>Educated customers on the vehicle repair process as well as the options and requirements of utilizing their insurance in said repairs</li>
                                <li>Prepared necessary supplemental damage estimates for Allstate, Progressive, and Country Financial</li>
                                <li>Implemented and maintained all of our Local Area Networks</li>
                            </ul>
                            <br/>
                            <h2 className="resumeH2">Education</h2>
                            <hr/>
                            <h3 className="resumeH3">Northwestern University School of Professional Studies, Chicago, Illinois</h3>
                            <h3 className="resumeH3"> -Full Stack Flex Web Development Program</h3>
                            <h3 className="resumeH3"> --Certificate of Completion</h3>
                            <h4 className="resumeH4">September 2020</h4>
                            <p className="resumeP">A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</p>
                            <br/>
                            <h3 classname="resumeH3"> The Second City Comedy Training Center, Chicago Illinois</h3>
                            <h3 className="resumeH3"> -Conservatory Program</h3>
                            <h4 className="resumeH4">Graduated 2019</h4>
                            <p className="resumeP">An advanced six-level program dedicated to the art of utilizing improvisation as a tool to create a Second City-style revue, the cornerstone of The Second City Training Center. Students in the Conservatory program build upon the fundamentals of improv, advance their scenic and character skills, explore forms and styles and learn how to turn improvised scenes into written material for a satiric comedy revue.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}
export default Resume;