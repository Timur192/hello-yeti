import * as React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import { Routes, Route, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@mui/material';

import TextField from '@mui/material/TextField';

import { Homepage } from '../pages/Homepage';
import { Weatherpage } from '../pages/Weatherpage';
import { Contactpage } from '../pages/Contactpage';


function PricingContent() {
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
          <nav className='position'>
            <NavLink  to='/' className='navlink-style'>Home</NavLink>
            <NavLink to='/weather' className='navlink-style'>Weather</NavLink>
            <NavLink to='/contact' className='navlink-style'>Contact</NavLink>
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

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/weather" element={<Weatherpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}