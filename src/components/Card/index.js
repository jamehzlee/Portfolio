import React, {useState} from "react";
import { Card as ProjectCard } from "@mui/material/";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import "./index.css";
import styled from 'styled-components';

const CustomItem = styled(Grid)`
  &:hover {
    transform: scale(1.025);
    opacity: 50%;
  }
`;

const Card = (props) => {
  // const [hover, setHover] = useState(false);
  // const handleHover = () => {
  //   hover === true ? setHover(false) : setHover(true);
  // }

  return (
    <CustomItem item>
      <Grow in={true} timeout={1000}>

        <ProjectCard raised={true} >
          <CardActionArea sx={{ maxWidth: 500, maxHeight: 250 }}>
            <a href={props.projectLinks} target="_blank" rel="noreferrer">
              <CardMedia component="img" src={props.src} alt={props.name} />
              <CardContent>
                <Typography>
                {props.name}
                </Typography>
              </CardContent>
            </a>
          </CardActionArea>
        </ProjectCard>

      </Grow>
    </CustomItem>
  );
}

export default Card;