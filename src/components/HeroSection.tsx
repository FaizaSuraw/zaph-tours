import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }} id="home">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/assets/giraffes.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero-content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          px: 2,
          background: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Dancing Script, cursive',
            fontWeight: 'bold',
            fontSize: { xs: '3rem', md: '5rem' },
            mb: 2,
            color: 'green',
            letterSpacing:'0.07rem',
          }}
        >
          Welcome to Zaph Tours
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Pacifico, cursive',
            mb: 2,
            color: 'black',
            letterSpacing:'0.09rem',
          }}
        >
          Discover Kenya, Discover Yourself
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            maxWidth: 600,
            mb: 4,
            fontSize: '1.5rem',
            color:'black',
            fontWeight:'bold',
            letterSpacing:'0.09rem',
          }}
        >
          Explore the wild beauty of Kenya with Zaph Tours
        </Typography>

        <Button variant="contained" color="secondary" size="large">
          Discover Destinations
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
