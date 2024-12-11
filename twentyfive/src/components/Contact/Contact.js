import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  margin: '50px'
}));

export default function SignIn(props) {
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs before sending
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const message = data.get('message');
    const fname = data.get('fname');
    const lname = data.get('lname');

    // Send the data to the backend
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message, fname, lname }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("ghghghgh" + result)
        alert('Message sent successfully');
        
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!message.value || message.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Message must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!fname.value || fname.value.length < 2) {
      setNameError(true);
      setNameErrorMessage('Name must be at least 3 characters long.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }
    if (!lname.value || lname.value.length < 2) {
      setNameError(true);
      setNameErrorMessage('Name must be at least 3 characters long.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  return (
    <div>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography component="h1" variant="h4" sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Let's Connect!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="text">First Name</FormLabel>
              <TextField
                error={nameError}
                helperText={nameErrorMessage}
                id="fname"
                type="text"
                name="fname"
                placeholder="first name"
                autoComplete="message"
                required
                fullWidth
                variant="outlined"
                color={nameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Last Name</FormLabel>
              <TextField
                error={nameError}
                helperText={nameErrorMessage}
                id="lname"
                type="text"
                name="lname"
                placeholder="last name "
                autoComplete="message"
                required
                fullWidth
                variant="outlined"
                color={nameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                id="message"
                type="text"
                name="message"
                placeholder="Your message"
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                multiline
                rows={4}
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained">
              Send Message
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </div>
  );
}
