import { Box, Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface Props {
  name: string;
  image: string;
  description: string;
  price: string;
}

const DestinationCard = ({ name, image, description, price }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        backgroundColor: 'white',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6,
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{ width: '100%', height: 200, objectFit: 'cover' }}
      />

      <Box sx={{ p: 2 }}>
        
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={1}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <LocationOnIcon fontSize="medium" color="primary"/>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2} fontSize={'1.3rem'} fontWeight={600}>
          {description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            mb: 2,
            transition: 'color 0.3s, transform 0.3s',
            '&:hover': {
              color: 'secondary.main',
              transform: 'scale(1.05)',
            },
          }}
        >
          <AttachMoneyIcon fontSize="medium" color="primary" />
          <Typography variant="subtitle2" color="primary" fontSize={'1.15rem'} fontWeight={300}>
            From {price}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          size="medium"
          fullWidth
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 2,
          }}
        >
          View Destination
        </Button>
      </Box>
    </Box>
  );
};

export default DestinationCard;
