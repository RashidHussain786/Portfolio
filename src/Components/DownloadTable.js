import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@mui/material';
const DownloadTable = () => {
  return (
    <TableContainer sx={{ mt: '20px' ,border:'1px solid #233056'}}>
  <Table sx={{ minWidth: 300 ,borderCollapse: 'separate',borderSpacing: '2px 2px'}}>
    <TableBody>
      <TableRow>
        <TableCell sx={{ color: '#fff', p: '1px' , width: '33.33%', borderBottom: 'none' }}>
          <Typography sx={{fontSize: '20px'}}> Windows Installer (.msi)</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64', p: "1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography>32-bit</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64', p:"1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography >64-bit</Typography>
        </TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell sx={{ color: '#fff',bgcolor:'#233056', p: '1px', width: '33.33%', borderBottom: 'none' }}>
          <Typography sx={{fontSize: '20px'}}>Windows Binary (.zip)</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64',bgcolor:'#233056', p: "1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography >32-bit</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64',bgcolor:'#233056', p:"1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography>64-bit</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ color: '#fff', p: '1px', width: '33.33%', borderBottom: 'none' }}>
          <Typography sx={{fontSize: '20px'}}>macOS Installer (.pkg)</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64', p: "1px", textAlign: 'center', width: '66.66%', border: '1px solid #999' }}colSpan={2}>
          <Typography>64-bit/ARM64</Typography>
        </TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell sx={{ color: '#fff',bgcolor:'#233056', p: '1px', width: '33.33%', borderBottom: 'none' }}>
          <Typography sx={{fontSize: '20px'}}>macOS Binary (.tar.gz)</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64',bgcolor:'#233056', p: "1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography>64-bit</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64',bgcolor:'#233056', p:"1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography>ARM64</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ color: '#fff', p: '1px', width: '33.33%', borderBottom: 'none' }}>
          <Typography sx={{fontSize: '20px'}}>Linux Binaries (x64)</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64', p:"1px", textAlign: 'center', width: '66.66%', border: '1px solid #999' }}colSpan={2}>
          <Typography>32-bit</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ color: '#fff',bgcolor:'#233056', p: '1px', width: '33.33%', borderBottom: 'none' }}>
          <Typography sx={{fontSize: '20px'}}>Linux Binaries (ARM)</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64',bgcolor:'#233056', p: "1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography>ARMv7</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64',bgcolor:'#233056', p:"1px", textAlign: 'center', width: '33.33%', border: '1px solid #999' }}>
          <Typography>ARMv8</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ color: '#fff', p: '1px',  width: '33.33%', borderBottom: 'none' }}>
          <Typography sx={{fontSize: '20px'}}>Source Code</Typography>
        </TableCell>
        <TableCell sx={{ color: '#84ba64', p: "1px", textAlign: 'center', width: '66.66%%', border: '1px solid #999' }}colSpan={2}>
          <Typography>node-v18.16.1.tar.gz</Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
  )
}

export default DownloadTable