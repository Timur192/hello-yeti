import * as React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@mui/material';

import TextField from '@mui/material/TextField';

function PricingContent() {
  /*const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'nowrap' }}>
        <Typography variant="h5" color="inherit" sx={{ pr: 115, ms: 1.5 }} >
            Hello Yeti
          </Typography>
          <nav>
            <Link className='App-link'
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 25 }}
              top="20px"
            >
              Features
            </Link>
            <Link className='App-link'
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 15.5 }}
              top="20px"
            >
              Support
            </Link>
          </nav>
          <div className='App-link'>
              <Button
                onClick={handleClickOpen}
                href="#" 
                variant="outlined"
                sx={{ my: 1, mx: 5 }}>
                  Login
              </Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="from-dialog-title">
                <DialogTitle id="from-dialog-title">Log in</DialogTitle>
                <DialogContent>
                <DialogContentText>Sign in to say hello</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log in</Button>
                </DialogActions>
              </Dialog>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}