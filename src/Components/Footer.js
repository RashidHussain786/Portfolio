import { Box, Typography } from "@mui/material";
import React from "react";

const Footer =()=>{
    return (
        <>
        <Box sx={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',bgcolor:'#233056',flexDirection: "column", minHeight: "100px" }}>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb:2,color:'#fff',flexDirection:{xs:'column',md:'row'} }}>
          <Typography variant='h6' sx={{ mr: '1rem',mt:{xs:2} }}>
            Connect with us on social media:
          </Typography>
          <Box display="flex" sx={{mt:{xs:2}}}>
            <Box component="a" href="https://www.linkedin.com/in/rashid-hussain-9b737b1b0/" target="_blank" rel="noopener noreferrer" sx={{ mr: '1rem' }}>
              <img src="/Assets/linkedIn.png" alt="LinkedIn" maxWidth="20px"height="40px"/>
            </Box>
            <Box component="a" href="https://github.com/RashidHussain786" target="_blank" rel="noopener noreferrer" sx={{ mr: '1rem' }}>
              <img src="/Assets/github.png" alt="GitHub" maxWidth="20px"height="40px"/>
            </Box>
            <Box component="a" href="https://leetcode.com/Rashid_Hussain_1/" target="_blank" rel="noopener noreferrer">
              <img src="/Assets/LeetCode.png" alt="LeetCode" maxWidth="20px"height="40px"/>
            </Box>
          </Box>
        </Box>
        <Typography variant='body1' align='center'sx={{color:'#fff',mb:{xs:3}}}>
          Made with ❤️ by Rashid Hussain &copy; {new Date().getFullYear()}
        </Typography>
        </Box>
        </>
    )
};

export default Footer;