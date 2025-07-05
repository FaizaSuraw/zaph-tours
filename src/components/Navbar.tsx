import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ScrollToSectionLink from './ScrollToSectionLink';

const navItems = [
  { label: 'Home', to: '/', type: 'link' },
  { label: 'About', to: 'about', type: 'custom-scroll' },
  { label: 'Destinations', to: '/destinations', type: 'link' },
  { label: 'Trip Types', to: '/trip-types', type: 'link' }, 
  { label: 'Contact', to: '/contact', type: 'link' },  
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        Zaph Tours
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.type === 'scroll' ? (
              <ScrollLink
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ScrollLink>
            ) : item.type === 'custom-scroll' ? (
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => {
                  setMobileOpen(false);
                  if (window.location.pathname !== '/') {
                    window.location.href = `/#${item.to}`;
                  } else {
                    
                    import('react-scroll').then(({ scroller }) => {
                      scroller.scrollTo(item.to, { smooth: true, duration: 500, offset: -70 });
                    });
                  }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ) : (
              <ListItemButton
                component={RouterLink}
                to={item.to}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#fff', boxShadow: 2 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              fontFamily: 'Pacifico, cursive',
              cursor: 'pointer',
            }}
          >
            Zaph Tours
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) =>
              item.type === 'scroll' ? (
                <ScrollLink
                  key={item.label}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-70}
                  style={{ textDecoration: 'none', marginLeft: '1rem' }}
                >
                  <Button sx={{ color: 'black', fontWeight: 600 }}>
                    {item.label}
                  </Button>
                </ScrollLink>
              ) : item.type === 'custom-scroll' ? (
                <ScrollToSectionLink
                  key={item.label}
                  to={item.to}
                  label={item.label}
                  sx={{ color: 'black', fontWeight: 600, marginLeft: '1rem' }}
                />
              ) : (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  sx={{ color: 'black', fontWeight: 600, marginLeft: '1rem' }}
                >
                  {item.label}
                </Button>
              )
            )}
          </Box>

          {/* Hamburger Icon */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
