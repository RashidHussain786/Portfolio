import { Box, Container, Grid,  Typography } from '@mui/material';
import React, { useState } from 'react';
import DownloadTable from './DownloadTable';

const DownloadLogo = ({ width = 50, height = 50, path }) => (
  <svg width={width} height={height} viewBox="0 0 50 50" focusable="false" style={{ fill: '#84ba64', borderRadius: '5px' }}>
    <path d={path} />
  </svg>
);

const DownloadComponent = () => {
  const [activeItem, setActiveItem] = useState('LTS');

  const gridItemStyle = (isActive) => ({
    p: 1,
    color: isActive ? '#fff' : '#84ba64',
    cursor: 'pointer',
    textAlign: 'center',
    bgcolor: isActive ? '#0aa007' : '#2c372a',
    transition: '0.3s', // Add transition for smooth hover effect
    '&:hover': {
      color: '#fff',
      bgcolor: '#43853d',
    },
  });

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <Box sx={{ bgcolor: "#000", mt: { xs: '110px', md: "42px" }, color: "#fff" }}>
      <Box sx={{ overflow: 'hidden' }}>
        <Container sx={{ maxWidth: { lg: '1032px' }, width: "100%", display: "flex", alignItems: "center", flexDirection: "column", minHeight: { md: "calc(100vh - 100px)" }, p: "30px" }}>
          <Box sx={{ maxWidth: "980px", width: "100%", textAlign: 'left' }}>
            <Typography variant="h1" sx={{ fontSize: '30px' }}>Downloads</Typography>
            <Typography variant="body1" sx={{ color: "#fff", fontSize: "20px", lineHeight: "2.6" }}>
              Latest LTS Version: 18.16.1
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", fontSize: "20px", lineHeight: "2.2" }}>
              Download my resume to learn more about my skills and experience.
            </Typography>

            <Box sx={{ mt: '20px', width: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center', bgcolor: '#2c372a',borderRadius:'10px' }}> 
              <Grid container  sx={{ margin: '0 -8px' }}>
                <Grid item xs={6} md={6} onClick={() => handleItemClick('LTS')} sx={{ ...gridItemStyle(activeItem === 'LTS'),borderTopLeftRadius:'10px'}}>
                  <Typography variant="h5">LTS</Typography>
                  <Typography variant="body1">Recommended For Most Users</Typography>
                </Grid>
                <Grid item xs={6} md={6} onClick={() => handleItemClick('Current')} sx={{ ...gridItemStyle(activeItem === 'Current'),borderTopRightRadius:'10px'  }}>
                  <Typography variant="h5">Current</Typography>
                  <Typography variant="body1">Freelancing Clients</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ width: '100%', bgcolor: '#0aa007', borderTop: '2px solid #0aa007',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'  }}>
              <Box sx={{ width: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center', bgcolor: '#2c372a',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px' }}>
                <Grid container >
                  <Grid item xs={12} md={4} sx={{transition:'0.3s','&:hover':{color:'#fff',bgcolor:'#43853d'},pt:3,cursor:'pointer'}}>
                  <a href="/Assets/resume.docx"style={{textDecoration: 'none',color:'#fff'}} download>
                    <DownloadLogo
                      width={50}
                      height={50}
                      path="M1.589 23.55L1.572 8.24l18.839-2.558V23.55zM23.55 5.225l25.112-3.654V23.55H23.55zM48.669 26.69l-.006 21.979-25.112-3.533V26.69zM20.41 44.736l-18.824-2.58-.001-15.466H20.41z"
                    />
                    <Typography variant="h6" sx={{ mb: 2, color: '#84ba64' }}>
                      Windows Downloader
                    </Typography>
                    <Typography variant="body2" sx={{pb:2}}>node-v18.16.1-x86.msi</Typography>
                    </a>
                  </Grid>

                  <Grid item xs={12} md={4} sx={{transition:'0.3s','&:hover':{color:'#fff',bgcolor:'#43853d'},pt:3,cursor:'pointer'}}>
                  <a href="/Assets/Resume.pdf"style={{textDecoration: 'none',color:'#fff'}} download>
                    <DownloadLogo
                      width={50}
                      height={50}
                      path="M39.054 34.065q-1.093 3.504-3.448 7.009-3.617 5.495-7.205 5.495-1.374 0-3.925-.897-2.411-.897-4.233-.897-1.71 0-3.981.925-2.271.953-3.701.953-4.261 0-8.439-7.261Q.001 32.075.001 25.29q0-6.392 3.168-10.485 3.14-4.037 7.962-4.037 2.019 0 4.962.841 2.916.841 3.869.841 1.262 0 4.009-.953 2.86-.953 4.85-.953 3.336 0 5.972 1.822 1.458 1.009 2.916 2.804-2.215 1.878-3.196 3.308-1.822 2.635-1.822 5.803 0 3.476 1.934 6.252t4.43 3.533zM28.512 1.179q0 1.71-.813 3.813-.841 2.103-2.607 3.869-1.514 1.514-3.028 2.019-1.037.308-2.916.477.084-4.177 2.187-7.205 2.075-3 7.009-4.149.028.084.07.308t.07.308q0 .112.014.28t.014.28z"
                    />
                    <Typography variant="h6" sx={{ mb: 2, color: '#84ba64' }}>
                      Mac Downloader
                    </Typography>
                    <Typography variant="body2"sx={{pb:2}}>node-v18.16.1.pkg</Typography>
                    </a>
                  </Grid>

                  <Grid item xs={12} md={4} sx={{transition:'0.3s','&:hover':{color:'#fff',bgcolor:'#43853d'},pt:3,cursor:'pointer'}}>
                  <a href="/Assets/Resume.tex"style={{textDecoration: 'none',color:'#fff'}} download>
                    <DownloadLogo
                      width={50}
                      height={50}
                      path="M25.03.934L.159 11.65l24.895 10.632 25.152-10.656L25.03.935zm1.02 22.686v25.686l24.188-11.483V13.345L26.05 23.62zM.001 37.824l24.27 11.483V23.621L.001 13.346v24.478z"
                    />
                    <Typography variant="h6" sx={{ mb: 2, color: '#84ba64' }}>
                      Source Code
                    </Typography>
                    <Typography variant="body2"sx={{pb:2}}>node-v18.16.1.tar.gz</Typography>
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Box>

           <DownloadTable/>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DownloadComponent;
