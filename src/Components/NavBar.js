import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import React from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useNavigate } from 'react-router-dom';

// Custom navigation item component
const NavItem = ({ children, to }) => {
  const navigate = useNavigate();

  
  const handleClick = () => {
    navigate(to);
  };

  return (
    <Typography
      variant="body1"
      sx={{
        mx: 1,
        color: '#ccc',
        fontSize: '14px',
        cursor: 'pointer',
        "&:hover": { textDecoration: "underline" }
      }}
      onClick={handleClick}
    >
      {children}
    </Typography>
  );
};

const NavBar = () => {

  const navigatToHome = useNavigate();

  const navigationItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/about" },
    { label: "DOWNLOAD", to: "/download" },
    { label: "EXPERIENCE", to: "/experience" },
    { label: "SKILLS", to: "/skills" },
    { label: "PROJECTS", to: "/projects" },
    { label: "CONTACT", to: "/contact" },
  ];

  return (
    <>
      <AppBar sx={{ bgcolor: "#233056" }}>
        <Toolbar sx={{ minHeight: { md: '42px' }, display: "flex",flexDirection:{xs:'column',md:'row'}, justifyContent: "space-between", alignItems: "center" }}>
          <Box onClick={()=>{navigatToHome('/')}} sx={{ display: 'flex', alignItems: 'center',cursor:'pointer' }}>
            <img src="./Assets/resume.jpg" alt="Logo" style={{ height: '40px', marginRight: '6px' }} />
            <Typography>My Portfolio</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap",justifyContent:'center', gap: "5px",mt:{xs:2,md:0} }}>
            {/* Your navigation elements for center content */}
            {navigationItems.map((item, index) => (
              <React.Fragment key={index}>
                <NavItem to={item.to}>{item.label}</NavItem>
                {index !== navigationItems.length - 1 && <Box sx={{ mx: 1, mt: -1 }}>|</Box>}
              </React.Fragment>
            ))}
          </Box>
          <Box >
            <IconButton color="inherit" aria-label="Day/Night Mode Icon">
              <LightModeIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Language Change Icon">
              <GTranslateIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
