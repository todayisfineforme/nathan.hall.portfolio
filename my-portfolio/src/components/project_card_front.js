import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../styles/project_card.css'

function Project_Card_Front(props){

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