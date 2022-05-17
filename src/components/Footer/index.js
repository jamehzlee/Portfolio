import "./index.css";
import resume from "../../assets/resume/James-Lee-Resume.pdf";
import { GitHub, LinkedIn, SimCardDownload } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={10}
      id="footer">
      
        <IconButton href="https://github.com/jamehzlee" target='_blank'>
          <GitHub sx={{ fontSize: 50 }} />
        </IconButton>

        <IconButton href="https://www.linkedin.com/in/thisjameslee/" target='_blank'>
          <LinkedIn sx={{ fontSize: 50 }} />
        </IconButton>

        <IconButton href={resume} download="James-Lee-Resume">
          <SimCardDownload sx={{ fontSize: 50 }} />
        </IconButton>
    </Stack>
  );
}