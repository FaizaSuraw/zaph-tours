import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import Navbar from '../components/Navbar';

const destinations = [
  {
    name: 'Vasco da Gama Pillar',
    image: '/assets/vasco-dagama.jpg',
    description:
      'This is an important historical landmark in Kenya, well worth visiting when you are in Malindi.',
    groupPrice: 'Ksh 3,500',
    individualPrice: 'Ksh 1,500',
  },
  {
    name: 'Lamu Island',
    image: '/assets/lamu-island.jpg',
    description:
      'Old-world charm with winding streets and Swahili culture.',
    groupPrice: 'Ksh 4,800',
    individualPrice: 'Ksh 1,200',
  },
  {
    name: 'Aberdare National Park',
    image: '/assets/aberdare.jpg',
    description:
      'Misty forests and waterfalls — angalia nyani na wanyama wengine wa porini katika mazingira ya asili.',
    groupPrice: 'Ksh 4,800',
    individualPrice: 'Ksh 1,200',
  },
  {
    name: 'Lake Victoria',
    image: '/assets/lake-victoria.jpg',
    description:
      'Largest lake in Africa, na samaki wa maji safi.',
    groupPrice: 'Ksh 3,800',
    individualPrice: 'Ksh 950',
  },
  {
    name: 'Hell’s Gate National Park',
    image: '/assets/hells-gate.jpg',
    description:
      'Hike through mawe ya moto and dramatic gorges.',
    groupPrice: 'Ksh 4,400',
    individualPrice: 'Ksh 1,100',
  },
  {
    name: 'Mt. Ruwenzori',
    image: '/assets/mt-ruwenzori.jpg',
    description:
      "Discover the legendary 'Mountains of the Moon' with glaciers and unique flora.",
    groupPrice: 'Ksh 4,999',
    individualPrice: 'Ksh 1,999',
  },
  {
    name: 'Watamu Beach',
    image: '/assets/watamu.jpg',
    description:
      'Relax on the pristine white sand and enjoy the peaceful maji ya bahari.',
    groupPrice: 'Ksh 4,400',
    individualPrice: 'Ksh 1,100',
  },
  {
    name: 'Maasai Mara',
    image: '/assets/maasai-mara.jpg',
    description:
      'Experience the iconic savannah, abundant wildlife, and the Great Migration spectacle.',
    groupPrice: 'Ksh 6,500',
    individualPrice: 'Ksh 2,100',
  },
];

const Destinations = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily="Pacifico, cursive"
            fontWeight="bold"
            color="primary.main"
            mb={5}
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
                    width: { xs: '100%', md: '45%' },
                    height: { xs: 200, md: 280 },
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />

                <Box maxWidth="500px">
                  <Typography variant="h6" fontWeight="bold" color="blue" mb={1}>
                    {dest.name}
                  </Typography>
                  <Typography fontSize="0.95rem" color="text.secondary" mb={1}>
                    {dest.description}
                  </Typography>
                  <Typography fontSize="0.9rem" mb={0.5}>
                    <strong>Group Price:</strong> {dest.groupPrice}
                  </Typography>
                  <Typography fontSize="0.9rem" mb={1.5}>
                    <strong>Individual Price:</strong> {dest.individualPrice}
                  </Typography>
                  <Button variant="contained" size="small" color="primary">
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
