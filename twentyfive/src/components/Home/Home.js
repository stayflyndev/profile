import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';


const ImageContainer = styled('div')({
  width: '100%',
  minHeight: '300px',  // Minimum height for the container
  height: 'auto',      // Let the container adjust to the content
  marginTop: '42px',   // Adjust top margin as needed
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
  objectFit: 'cover',  // Ensure the image fits within the container without cropping
});

export default function Hero() {
  const [isClicked, setIsClicked] = React.useState(false); // State to track click

  const handleClick = () => {
    setIsClicked((prev) => !prev); // Toggle the state on click
  };

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 12, sm: 9 },  // Reduced padding for small screens
          pb: { xs: 0, sm: 0 },
        }}
      >
        <ImageContainer onClick={handleClick} sx={{ marginTop: { xs: '20px', sm: '42px' } }}> {/* Adjusted marginTop */}
          <Image
            src={isClicked ? "/back_banner.png" : "/front_banner.png"}  // Conditionally change image
            alt="Image"
          />
        </ImageContainer>
      </Container>
    </Box>
  );
}
