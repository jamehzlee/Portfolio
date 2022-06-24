import "./index.css";
import { pokemon, rpg, weather, blog, freelancer } from "../../../assets"
import { Grid } from "@mui/material";
import Card from "../../Card"

export default function Projects() {
  const projects = [
    {
      name: "Freelancer",
      link: "https://freelancer-jl.herokuapp.com/",
      image: freelancer
    },
    {
      name: "RPG Character Database",
      link: "https://bp-rpg-character-database.herokuapp.com/",
      image: rpg
    },
    {
      name: "PokeFinder",
      link: "https://jamehzlee.github.io/Pokemon-Data-Finder/",
      image: pokemon
    },
    {
      name: "Weather Dashboard",
      link: "https://jamehzlee.github.io/Weather-Dashboard/",
      image: weather
    },
    {
      name: "Tech Blog",
      link: "https://tech-blog-jlee.herokuapp.com/",
      image: blog
    }
  ]
  .map((projects, i) => 
    <Card key={i} projectLinks={projects.link} src={projects.image} name={projects.name}/>
  )

  return (
    <Grid container justifyContent="center" spacing={6} paddingTop={3}>
      {projects}
    </Grid>
  );
};