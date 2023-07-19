import { Box, Container, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Governance from "./Governance";

const AboutComponent = () => {
  const [activeButton, setActiveButton] = useState("about");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const getButtonStyles = (buttonName) => ({
    bgcolor: activeButton === buttonName ? "#026e00" : "transparent",
    color: activeButton === buttonName ? "white" : "#84ba64",
    textAlign:'left',
    justifyContent: "flex-start",
    mb: 1,
    "&:hover": {
      bgcolor: "#84ba64",
      color: "white",
    },
    fontWeight: activeButton === buttonName ? "normal" : "bold",
  });

  return (
    <>
      <Box sx={{ bgcolor: "#000", mt: { xs: '110px', md: "42px" }, color: "#fff" }}>
        <Container sx={{ maxWidth: { lg: '1032px' }, width: "100%", display: "flex", alignItems: "center", flexDirection: "column", minHeight: { md: "calc(100vh - 100px)" } }}>
          <Box sx={{ maxWidth: "980px", width: "100%", p: "30px",mt:{xs:6,md:0}, textAlign: 'left' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Button
                  variant="contained"
                  sx={getButtonStyles("about")}
                  onClick={() => handleButtonClick("about")}
                  fullWidth
                >
                  About
                </Button>
                <Button
                  variant="contained"
                  sx={getButtonStyles("governance")}
                  onClick={() => handleButtonClick("governance")}
                  fullWidth
                >
                  Governance
                </Button>
              </Grid>
              <Grid item xs={12} md={9}>
                {activeButton === "about" && (
                  <>
                    <Typography variant="h5" sx={{ mb: "20px", color: "#fff",fontSize: "24px", fontWeight: "bold" }}>
                      About Me
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff", fontSize: "18px", lineHeight: "1.6" }}>
                      I am a passionate and skilled Software Engineer with a love for creating scalable and efficient web applications. My journey with JavaScript and related technologies has been an exciting adventure, with hands-on experience in <span style={{ color: "#84ba64", fontSize: "20px" }}>React.js and Node.js</span>.
                    </Typography>
                    {/* image */}
                    <img src="./Assets/Server.jpg" alt="Server Code" style={{ width: "100%", height: "auto", marginTop: "20px" }} />
                    <Typography variant="body1" sx={{ color: "#fff", mt: "20px" , fontSize: "18px", lineHeight: "1.6"}}>
                      In my journey, I've learned the art of building asynchronous event-driven applications using Node.js. This powerful runtime allows me to handle multiple connections concurrently, providing a seamless user experience. The non-blocking nature of Node.js ensures the application remains highly responsive, making it an ideal choice for building scalable network applications.
                    </Typography>
                    <Typography variant="body1" sx={{borderBottom: "2px solid #fff", color: "#fff", mt: "20px", fontSize: "18px", lineHeight: "1.6" }}>
                    My curiosity for innovative technologies led me to explore Express.js and Node.js, which influenced Node.js' design. Node.js takes the event model further by presenting the event loop as a runtime construct. This enables me to create high-performance applications while ensuring the event loop remains hidden from the user, just like in browser JavaScript.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff", mt: "20px", fontSize: "18px", lineHeight: "1.6" }}>
                      HTTP being a first-class citizen in Node.js opens up a world of possibilities for creating streaming and low-latency web applications. I believe in leveraging Node.js' capabilities to lay a strong foundation for robust web libraries and frameworks.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff", mt: "20px" , fontSize: "18px", lineHeight: "1.6"}}>
                      Even without traditional threads, I can effectively utilize multiple cores in the environment through Node.js' child_process.fork() API and the cluster module. These features enable seamless communication between processes, making load balancing over cores a breeze.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff", mt: "20px", fontSize: "18px", lineHeight: "1.6" }}>
                      If you're curious about the differences between blocking and non-blocking paradigms, I've written a full article on <a href="https://nodejs.org/en/docs/guides/blocking-vs-non-blocking" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>Blocking vs. Non-Blocking</a> that you might find interesting.
                    </Typography>
                  </>
                )}
                {activeButton === "governance" && (
                  <>
                    <Governance />
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutComponent;
