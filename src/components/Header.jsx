import { Box, CssBaseline, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            SoftLife Vendors
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
