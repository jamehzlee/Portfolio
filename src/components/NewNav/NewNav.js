import "./NewNav.css"
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import UpArrow from '@mui/icons-material/KeyboardArrowUp';
import AppIcon from '@mui/icons-material/AppsSharp';
import DownArrow from '@mui/icons-material/KeyboardArrowDown';

export function NewNav() {
  return (
    <Stack id="side-nav" spacing={6} position="fixed" top="35%" zIndex={3}>
      <Fab size="medium" sx={{ background: "gray"}} href="#">
        <UpArrow sx={{ fontSize: 50 }} />
      </Fab>

      <Fab size="medium" sx={{ background: "gray"}} href="#projects">
        <AppIcon sx={{ fontSize: 36 }} />
      </Fab>

      <Fab size="medium" sx={{ background: "gray"}} href="#footer">
        <DownArrow sx={{ fontSize: 50 }} />
      </Fab>
    </Stack>
  );
}
