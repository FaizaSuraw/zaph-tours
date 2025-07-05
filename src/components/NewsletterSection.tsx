import { Box, Typography, Container, Button } from '@mui/material';

const NewsletterSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f0f4c3', textAlign: 'center', px: 2 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Pacifico, cursive',
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 2,
          }}
        >
          Join Our Safari Circle
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1.1rem',
            color: 'text.secondary',
            mb: 4,
          }}
        >
          Subscribe to receive exclusive travel tips, destination updates, and special offers!
        </Typography>

        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
          }}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              width: '100%',
              maxWidth: '300px',
            }}
          />
          <Button type="submit" variant="contained" color="secondary" size="large">
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsletterSection;
