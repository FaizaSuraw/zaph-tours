import { Box, Typography, Container, Paper, Button } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: '#fffefb',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Dancing Script, cursive',
            fontWeight: 'bold',
            fontSize: '2.8rem',
            color: 'primary.main',
            mb: 3,
          }}
        >
          About Zaph Tours
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: '#fff',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              fontFamily: 'Roboto, sans-serif',
              color: 'text.secondary',
            }}
          >
            Zaph Tours is Kenya’s leading travel company offering safaris and adventure tours across breathtaking landscapes. Whether you're chasing wildlife, experiencing vibrant cultures, or relaxing on serene coasts, we deliver once-in-a-lifetime moments with passion and professionalism.
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            sx={{
              mt: 7,
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: 'secondary.main',
                color: 'white',
              },
            }}
          >
            Learn More
          </Button>
        </Paper>

        {/* Stats */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            mt: 6,
            gap: 4,
          }}
        >
          {[
            { label: 'Destinations', value: '10+' },
            { label: 'Happy Travelers', value: '1,000+' },
            { label: 'Years Experience', value: '7+' },
          ].map((stat, i) => (
            <Box key={i} sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: 'bold', fontFamily: 'Pacifico, cursive' }}
              >
                {stat.value}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
