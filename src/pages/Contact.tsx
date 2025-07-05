import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
    <Navbar />
    <Box sx={{ py: 10, backgroundColor: '#fff' }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontFamily: 'Pacifico, cursive', color: 'primary.main', mb: 4 }}
        >
          Contact Us
        </Typography>

        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          Have questions or need help planning your safari? Fill the form below and we’ll get back to you.
        </Typography>

        <Stack spacing={3}>
          <TextField label="Full Name" variant="outlined" fullWidth required />
          <TextField label="Email" type="email" variant="outlined" fullWidth required />
          <TextField label="Message" variant="outlined" fullWidth multiline rows={4} required />
          <Button variant="contained" color="primary" size="large">
            Send Message
          </Button>
        </Stack>
      </Container>
    </Box>
    <Footer />
    </>
  );
};

export default ContactUs;
