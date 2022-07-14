import React from "react";
import { About, Projects } from "../pages";
import Grow from "@mui/material/Grow";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { NewNav } from "../NewNav/NewNav";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Footer from "../Footer";

export function Home() {
  return (
    <>
      <Grid item pl={4}>
        <NewNav />
      </Grid>

{/* About section */}
      <Grid container item mb={6} xs={12}>
        <Grid
          container
          item
          id="about"
          sx={{ mb: 10, pt: 6, pb: 10 }}
          xs={12}
          justifyContent="center"
        >
          <Grid item xs={10}>
            <ThemeProvider theme={theme}>
              <Typography variant="h1" sx={{ ml: 4, mb: 4}} xs={6}>
                About Me
              </Typography>
            </ThemeProvider>
          </Grid>

          <Grow in={true} timeout={500}>
            <Container >
              <About />
            </Container>
          </Grow>
        </Grid>

{/* Project section */}
        <Grid
          container
          item
          id="projects"
          sx={{ my: 6, pb: 12, pt: 4 }}
          justifyContent="center"
        >
          <Grid item xs={10}>
            <ThemeProvider theme={theme}>
              <Typography variant="h1" m={4}>
                Projects
              </Typography>
            </ThemeProvider>
          </Grid>

          <Grow in={true} timeout={200}>
            <Container>
              <Projects />
            </Container>
          </Grow>
        </Grid>
      </Grid>

      <Footer id="footer" />
    </>
  );
}
