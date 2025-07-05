import { Box, Typography, Container } from '@mui/material';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    name: 'Mt. Kenya',
    image: '/assets/mt-kenya.jpg',
    description: 'Experience Kenya’s highest peak with breathtaking views and alpine scenery.',
    price: 'ksh 1,200',
  },
  {
    name: 'Mt. Ruwenzori',
    image: '/assets/mt-ruwenzori.jpg',
    description: 'Explore the mystical “Mountains of the Moon” on a guided adventure.',
    price: 'ksh 1,500',
  },
  {
    name: 'Lake Nakuru',
    image: '/assets/lake-nakuru.jpg',
    description: 'A bird lover’s paradise with flamingos and stunning landscapes.',
    price: 'ksh 950',
  },
  {
    name: 'Tsavo National Park',
    image: '/assets/tsavo.jpg',
    description: 'Witness elephants, lions, and rich biodiversity in Kenya’s largest park.',
    price: 'ksh 1,100',
  },
  {
    name: 'Nairobi National Park',
    image: '/assets/nairobi.jpg',
    description: 'A wildlife haven just minutes from the capital city.',
    price: 'ksh 850',
  },
  {
    name: 'Coastal Kenya',
    image: '/assets/coastal-ke.jpg',
    description: 'Relax on Kenya’s white sandy beaches and enjoy Swahili culture.',
    price: 'ksh 1,300',
  },
];
const FeaturedDestinations = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Pacifico, cursive',
            fontWeight: 'bold',
            color: 'primary.main',
            textAlign: 'center',
            mb: 6,
          }}
        >
          Featured Destinations
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 4,
          }}
        >
          {destinations.map((dest, index) => (
            <DestinationCard
              key={index}
              name={dest.name}
              image={dest.image}
              description={dest.description}
              price={dest.price}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
