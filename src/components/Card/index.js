import "./index.css";
import React from "react";
import { CardActionArea, CardMedia, Grid, Grow } from "@mui/material";
import { Card as ProjectCard } from "@mui/material";

export default class Card extends React.Component {
  render() {
 
    return (
      <Grid item>
        <Grow in={true} timeout={1000}>
          <ProjectCard>
            <CardActionArea sx={{ maxWidth: 500, maxHeight: 250 }}>
              <a href={this.props.projectLinks} target="_blank" rel="noreferrer">
                <CardMedia component="img" src={this.props.src} alt={this.props.name} />
              </a>
            </CardActionArea>
          </ProjectCard>
        </Grow>
      </Grid>
    );
  }
}