import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import ProjectCardFront from './project_card_front';
import '../styles/projects.css'
import project_data from '../data/projects.js'
import ProjectCardBack from './project_card_back';


function Projects(props){

    const [currentCard, setCurrentCard] = useState(0)

    const cardStyle = {
        height: '7.5vw',
        width: '13vw'
    };


    return(
        <Container className="projects">
            <Grid container spacing={0} className="">
                <Grid item className="projectDiv">
                    <Header active="projects"/>
                    <Grid container justify="center">
                        <ProjectCardBack 
                            name={project_data[currentCard].name} 
                            description={project_data[currentCard].description}
                            deployed={project_data[currentCard].link}
                            github={project_data[currentCard].github}
                            background={project_data[currentCard].background}
                        >
                        </ProjectCardBack>
                    </Grid>
                    <Grid container justify="center">
                        <ProjectCardFront 
                            project_image={project_data[0].image} 
                            name={project_data[0].name} 
                            background={project_data[0].background} 
                            style={cardStyle}
                            click={() => {setCurrentCard(0)}}
                        >
                        </ProjectCardFront>
                        <ProjectCardFront 
                            project_image={project_data[1].image} 
                            name={project_data[1].name} 
                            background={project_data[1].background} 
                            style={cardStyle}
                            click={() => {setCurrentCard(1)}}
                        >
                        </ProjectCardFront>
                        <ProjectCardFront 
                            project_image={project_data[2].image} 
                            name={project_data[2].name} 
                            background={project_data[2].background} 
                            style={cardStyle}
                            click={() => {setCurrentCard(2)}}
                        >
                        </ProjectCardFront>
                    </Grid>
                    <Grid container justify="center">
                        <ProjectCardFront 
                            project_image={project_data[3].image} 
                            name={project_data[3].name} 
                            background={project_data[3].background} 
                            style={cardStyle}
                            click={() => {setCurrentCard(3)}}
                        >
                        </ProjectCardFront>
                        <ProjectCardFront 
                            project_image={project_data[4].image} 
                            name={project_data[4].name} 
                            background={project_data[4].background} 
                            style={cardStyle}
                            click={() => {setCurrentCard(4)}}
                        >
                        </ProjectCardFront>
                        <ProjectCardFront 
                            project_image={project_data[5].image} 
                            name={project_data[5].name} 
                            background={project_data[5].background} 
                            style={cardStyle}
                            click={() => {setCurrentCard(5)}}
                        >
                        </ProjectCardFront>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Projects;