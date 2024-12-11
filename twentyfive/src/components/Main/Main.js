import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const AboutMeContainer = styled('div')({
    width: '100%',
    minHeight: '300px',  // Minimum height for the container
    height: 'auto',      // Let the container adjust to the content
    marginTop: '32px',   // Adjust top margin as needed
    borderRadius: '12px',  // Adjust border radius
    border: '3px solid black',  // Optional border styling
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
    overflow: 'hidden', 
  });
  
  const Image = styled('img')({
    width: '100%',
    height: 'auto',  // Maintain aspect ratio
    objectFit: 'contain',  // Ensure the image fits within the container without cropping
  });
  

  

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 8, sm: 8 },
          pb: { xs: 4, sm: 4 },
        }}
      >
        
        <AboutMeContainer>
        <Image src="/meeee.png" alt="Image" />
      </AboutMeContainer>
      </Container>
    </Box>
  );
}