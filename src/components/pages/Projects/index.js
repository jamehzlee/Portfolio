import "./index.css";
import pokemon from "../../../assets/images/pokemon.png";
import rpg from "../../../assets/images/rpg.png";
import weather from "../../../assets/images/weather.png";
import blog from "../../../assets/images/blog.png";
import freelancer from "../../../assets/images/freelancer.png";
import { Grid } from "@mui/material";
import Card from "../../Card";

export default function Projects() {
  const projects = [
    {
      name: "freelancer",
      link: "https://freelancer-jl.herokuapp.com/",
      src: freelancer
    },
    {
      name: "rpg",
      link: "https://bp-rpg-character-database.herokuapp.com/",
      src: rpg
    },
    {
      name: "pokemon",
      link: "https://jamehzlee.github.io/Pokemon-Data-Finder/",
      src: pokemon
    },
    {
      name: "weather",
      link: "https://jamehzlee.github.io/Weather-Dashboard/",
      src: weather
    },
    {
      name: "blog",
      link: "https://tech-blog-jlee.herokuapp.com/",
      src: blog
    }
  ]
  .map((projects, i) => 
    <Card key={i} projectLinks={projects.link} src={projects.src} name={projects.name}/>
  )

  return (
    <Grid container justifyContent="center" spacing={6} paddingTop={3}>
      {projects}
    </Grid>
  );
};