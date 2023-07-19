import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ContactComponent = () => {
  return (
    <Box sx={{ bgcolor: '#000', mt: { xs: '110px', md: '42px' }, color: '#fff' }}>
      <Container sx={{ maxWidth: { lg: '1032px' }, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: { md: 'calc(100vh - 140px)' } }}>
        <Box sx={{ maxWidth: '980px', width: '100%', p: '30px', mt: { xs: 6, md: 0 }, textAlign: 'left' }}>
          <Typography variant="h1" sx={{ fontSize: '30px' }}>Contact Us</Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', mt: '20px', color: '#ccc' }}>
            Feel free to contact us using the information below. We'll be happy to assist you.
          </Typography>

          <Grid container spacing={2} sx={{ mt: '30px', color: '#ccc', borderRadius: '8px', border: '1px solid #0aa007', bgcolor: '#2c372a' }}>
            <Grid item xs={12} sm={6} sx={{ mt: { md: 2, xs: 0 } }}>
              <Typography variant="h3" sx={{ pb: 2 }}>Contact Information</Typography>
              <Typography variant="body1">Email: rashiddss3@gmail.com</Typography>
              <Typography variant="body1">Phone: +91 8294810251</Typography>
              <Typography variant="body1">Address: Sardarganj, Dalsingsarai, Samastipur, Bihar (848114) </Typography>
              <Box display="flex" sx={{ mt: { xs: 2 } }}>
                <Box component="a" href="https://www.linkedin.com/in/rashid-hussain-9b737b1b0/" target="_blank" rel="noopener noreferrer" sx={{ mr: '1rem' }}>
                  <img src="/Assets/linkedIn.png" alt="LinkedIn" maxWidth="20px" height="40px" />
                </Box>
                <Box component="a" href="https://github.com/RashidHussain786" target="_blank" rel="noopener noreferrer" sx={{ mr: '1rem' }}>
                  <img src="/Assets/github.png" alt="GitHub" maxWidth="20px" height="40px" />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: { md: 2, xs: 1 } }}>
                <img src="/Assets/hireme.png" alt="Hire Me" style={{ maxWidth: '40px', marginRight: '10px' }} />
                <Typography variant="body1">Available for hire. Let's work together!</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: 'center', pb: 2 }}>
              <img src="https://avatars.githubusercontent.com/u/84129308?v=4" alt="My Avtar" style={{ width: '200px', borderRadius: '50%', marginBottom: '20px' }} />
              <Typography variant="body1">Rashid Hussain</Typography>
              <Typography variant="body1">Software Developer</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactComponent;
