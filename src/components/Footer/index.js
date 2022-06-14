import "./index.css";
import { Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

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

        <IconButton href="mailto:this.jameslee96@gmail.com" >
          <Email sx={{ fontSize: 50 }} />
        </IconButton>
    </Stack>
  );
}