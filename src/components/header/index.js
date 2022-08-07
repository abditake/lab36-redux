import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import SimpleCart from '../cart/index'

import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';


export default function Header() {

  const pointer = { cursor: 'pointer' }

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}

      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color=''>
        <Toolbar>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <>
            <Link to={'/'}><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Abdi's Emporium
          </Typography></Link>
            </>
          </Typography>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <ShoppingCartIcon
                onClick={toggleDrawer(anchor, true)}>{anchor}</ShoppingCartIcon>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
                <SimpleCart />
              </Drawer>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

