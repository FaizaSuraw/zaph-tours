import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  Card,
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tripTypes = [
  {
    name: 'Safari Adventures',
    images: [
      '/assets/safari1.jpg',
      '/assets/safari2.jpg',
      '/assets/safari3.jpg',
      '/assets/safari4.jpg',
      '/assets/safari5.jpg',
      '/assets/safari6.jpg',
    ],
    description:
      'Embark on unforgettable safaris and get up close with wildlife in iconic parks.',
  },
  {
    name: 'Beach Escapes',
    images: [
      '/assets/beach1.jpg',
      '/assets/beach2.jpg',
      '/assets/beach3.jpg',
      '/assets/beach4.jpg',
      '/assets/beach5.jpg',
      '/assets/beach6.jpg',
      '/assets/beach7.jpg',
    ],
    description:
      'Relax along Kenya’s stunning coastline — sun, sand, and Swahili vibes.',
  },
  {
    name: 'Cultural Tours',
    images: [
      '/assets/culture1.jpg',
      '/assets/culture2.jpg',
      '/assets/culture3.jpg',
      '/assets/culture4.jpg',
      '/assets/culture5.jpg',
      '/assets/culture6.jpg',
      '/assets/culture7.jpg',
      '/assets/culture8.jpg',
    ],
    description:
      'Experience rich traditions, local food, and authentic Kenyan communities.',
  },
  {
    name: 'Mountain Treks',
    images: [
      '/assets/mt1.jpg',
      '/assets/mt2.jpg',
      '/assets/mt3.jpg',
      '/assets/mt4.jpg',
      '/assets/mt5.jpg',
      '/assets/mt6.jpg',
    ],
    description:
      'Hike scenic mountain trails like Mt. Kenya and enjoy breathtaking views.',
  },
];

const TripTypes = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ py: 10, backgroundColor: '#f7f7f7' }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Pacifico, cursive',
              fontWeight: 'bold',
              color: 'primary.main',
              textAlign: 'center',
              mb: 10,
            }}
          >
            Choose Your Adventure
          </Typography>

          <Stack spacing={10}>
            {tripTypes.map((trip, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 4,
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 300, sm: 400 },
                    backgroundImage: `url(${trip.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: 30,
                      color: '#fff',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 'bold', mb: 1 }}
                    >
                      {trip.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, maxWidth: 600 }}>
                      {trip.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ fontWeight: 'bold' }}
                    >
                      Explore Trips
                    </Button>
                  </Box>
                </Box>

                <Card
                  sx={{
                    p: 2,
                    borderRadius: 0,
                    backgroundColor: '#fff',
                    borderTop: '4px solid #1976d2',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      overflowX: 'auto',
                      gap: 2,
                      py: 1,
                      '&::-webkit-scrollbar': { height: '8px' },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ccc',
                        borderRadius: '4px',
                      },
                    }}
                  >
                    {trip.images.map((src, idx) => (
                      <Box
                        key={idx}
                        component="img"
                        src={src}
                        alt={`${trip.name} ${idx + 1}`}
                        sx={{
                          width: 240,
                          height: 160,
                          objectFit: 'cover',
                          borderRadius: 2,
                          flexShrink: 0,
                          transition: 'transform 0.3s',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default TripTypes;
