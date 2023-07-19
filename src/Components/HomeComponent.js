import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import React from "react";

const NavigationItems = ({ items }) => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <Typography variant="body2" sx={{ color: '#026e00', mx: 0.5 }}>
          {item}
        </Typography>
        {index !== items.length - 1 && (
          <Typography variant="body2" sx={{ color: '#026e00', mx: 0.5 }}>|</Typography>
        )}
      </React.Fragment>
    ))}
  </Box>
);

const HomeComponent = () => {
  const navigationItems = [
    "Other Download", "Changelog", "API Docs"
  ];

  return (
    <>
      <Box sx={{ bgcolor: "#000", mt: { xs: '110px', md: 0 }, color: "#fff" }}>
        <Container sx={{ maxWidth: { lg: '1032px' }, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: { md: "calc(100vh - 100px)" } }}>
          <Box sx={{ maxWidth: "735px", width: "100%", p: "30px", textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mt: "50px", mb: '20px' }}>
              Hi, I am Rashid Hussain
            </Typography>
            <Typography variant="body1">
              I am a skilled and enthusiastic Software Engineer with a passion for building scalable and efficient web applications.
              My expertise lies in JavaScript and related technologies, with hands-on experience in React.js, Node.js.
            </Typography>
            <Typography variant="h4" sx={{ mt: "20px", fontSize: { xs: "2rem" } }}>Download for Windows (x64)</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: 'column', md: 'row' } }}>
            {/* First Card */}
            <Box sx={{ display: "flex", flexDirection: "column", my: { xs: 2, md: 0 }, alignItems: "center", mx: 2 }}>
              <a href="/Assets/resume.docx"style={{textDecoration: 'none'}} download>
                <Card sx={{ width: 300, textAlign: "center", bgcolor: '#026e00', color: '#fff' }}>
                  <CardContent>
                    <Typography variant="h5">18.16.1 LTS</Typography>
                    <Typography variant="body1">Recommended For Most Users</Typography>
                  </CardContent>
                </Card>
              </a>
              {/* Navigation items */}
              <NavigationItems items={navigationItems} />
            </Box>

            {/* Second Card */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: 2 }}>
              <a href="/Assets/resume.docx" style={{textDecoration: 'none'}} download>
                <Card sx={{ width: 300, textAlign: "center", bgcolor: '#026e00', color: '#fff' }}>
                  <CardContent>
                    <Typography variant="h5">20.4.0 Current</Typography>
                    <Typography variant="body1">Freelancing Clients</Typography>
                  </CardContent>
                </Card>
              </a>
              {/* Navigation items */}
              <NavigationItems items={navigationItems} />
            </Box>
          </Box>
          <Box display="flex" textAlign="center" justifyContent="center" sx={{ mt: 5, mx: 2, pb: { xs: 3, md: 0 } }}>
            <Typography variant="h6">To access the latest version of my resume and explore additional content,
              please refer to the Download section on my website/portfolio.</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomeComponent;
