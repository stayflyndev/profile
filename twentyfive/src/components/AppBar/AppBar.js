import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './Sitemark';
import { Link as RouterLink } from 'react-router-dom';  // Import RouterLink for internal routing

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '2px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <RouterLink to="/" rel="noopener noreferrer">
                <Button variant="text" color="info" size="small">Home</Button>
              </RouterLink>
              <RouterLink to="https://github.com/stayflyndev" target="_blank" rel="noopener noreferrer">
                <Button variant="text" color="info" size="small">Github</Button>
              </RouterLink>
              <RouterLink to="https://youtube.com/stayflyndev" target="_blank" rel="noopener noreferrer">
                <Button variant="text" color="info" size="small">Youtube</Button>
              </RouterLink>
              <RouterLink to="https://resume.com" target="_blank" rel="noopener noreferrer">
                <Button variant="text" color="info" size="small">Resume</Button>
              </RouterLink>

              {/* Update this part to link to the Contact page */}
              <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="text" color="info" size="small">Contact</Button>
              </RouterLink>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}></Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem><RouterLink to="/" style={{ textDecoration: 'none' }}>
                Home </RouterLink></MenuItem>
                <MenuItem><RouterLink to="https://github.com/stayflyndev" style={{ textDecoration: 'none' }}>
                Github </RouterLink></MenuItem>
                <MenuItem><RouterLink to="https://youtube.com/stayflyndev" style={{ textDecoration: 'none' }}>
                Youtube </RouterLink></MenuItem>
                <MenuItem><RouterLink to="/contact" style={{ textDecoration: 'none' }}>
                Resume </RouterLink></MenuItem>
                {/* Link to Contact page in the drawer menu */}
                <MenuItem>
                  <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
                    Contact
                  </RouterLink>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
