import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import Image from './logo.png'
import Box from '@mui/material/Box';

export default function SitemarkIcon() {
  return (
    <Box
    component="img"
    src={Image} // The path to your logo image
    alt="Logo"
    sx={{ height: 70, width: 'auto', mr: 2 }} // Adjust size and margins
  />
  );
}