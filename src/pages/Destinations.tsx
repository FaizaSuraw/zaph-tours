import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const destinations = [
    {
    name: 'Vasco da gama Pillar',
    image: '/assets/vasco-dagama.jpg',
    description: 'This is an important historical landmark in Kenya, well worth to visit when you are in Malindi',
    groupPrice: 'Ksh 3,500',
    individualPrice: 'Ksh 1,500',
  },
   {
    name: 'Lamu Island',
    image: '/assets/lamu-island.jpg',
    description: 'Old-world charm with winding streets and Swahili culture.',
    groupPrice: 'Ksh 4,800',
    individualPrice: 'Ksh 1,200',
  },
  {
    name: 'Aberdare National Park',
    image: '/assets/aberdare.jpg',
    description: 'Misty forests and waterfalls — angalia nyani na wanyama wengine wa porini katika mazingira ya asili.',
    groupPrice: 'Ksh 4,800',
    individualPrice: 'Ksh 1,200',
  },
  {
    name: 'Lake Victoria',
    image: '/assets/lake-victoria.jpg',
    description: 'Largest lake in Africa, na samaki wa maji safi.',
    groupPrice: 'Ksh 3,800',
    individualPrice: 'Ksh 950',
  },
  {
    name: 'Hell’s Gate National Park',
    image: '/assets/hells-gate.jpg',
    description: 'Hike through mawe ya moto and dramatic gorges.',
    groupPrice: 'Ksh 4,400',
    individualPrice: 'Ksh 1,100',
  },
  {
    name: 'Mt. Ruwenzori',
    image: '/assets/mt-ruwenzori.jpg',
    description: "Discover the legendary 'Mountains of the Moon' with glaciers and unique flora.",
    groupPrice: 'Ksh 4,999',
    individualPrice: 'Ksh 1,999',
  },
  {
    name: 'Watamu Beach',
    image: '/assets/watamu.jpg',
    description: 'Relax on the pristine white sand and enjoy the peaceful maji ya bahari.',
    groupPrice: 'Ksh 4,400',
    individualPrice: 'Ksh 1,100',
  },
  {
    name: 'Maasai Mara',
    image: '/assets/maasai-mara.jpg',
    description: 'Experience the iconic savannah, abundant wildlife, and the Great Migration spectacle.',
    groupPrice: 'Ksh 6,500',
    individualPrice: 'Ksh 2,100',
  },
];

const Destinations = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            fontFamily="Pacifico, cursive"
            fontWeight="bold"
            color="primary.main"
            mb={6}
          >
            Explore Our Destinations
          </Typography>

          <Stack spacing={5}>
            {destinations.map((dest, index) => (
              <Stack
                key={index}
                direction={{ xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                spacing={4}
                alignItems="center"
              >
                <Box
                  component="img"
                  src={dest.image}
                  alt={dest.name}
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: 250, md: 400 },
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: 2,
                  }}
                />

                
                <Box>
                  <Typography variant="h2" fontWeight="bold" color='blue' gutterBottom fontFamily={'cursive'} fontSize={'2rem'}>
                    {dest.name}
                  </Typography>
                  <Typography color="text.secondary" mb={2}  fontWeight="bold" fontSize={'1.3rem'}>
                    {dest.description}
                  </Typography>
                  <Typography variant="body2" mb={1} fontWeight="bold" fontSize={'1.3rem'}>
                    <strong>Group Price:</strong> {dest.groupPrice}
                  </Typography>
                  <Typography variant="body2" mb={2} fontWeight="bold" fontSize={'1.3rem'}>
                    <strong>Individual Price:</strong> {dest.individualPrice}
                  </Typography>
                  <Button variant="contained" color="primary" href="#">
                    More Details
                  </Button>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Destinations;
