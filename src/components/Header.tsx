import { Box, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        py: { xs: 8, md: 5 },
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            fontFamily: 'Pacifico, cursive',
            textAlign: 'center',
            mb: 2,
          }}
        >
          Discover Kenya with Zaph Tours
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Explore hidden gems, breathtaking landscapes, and unforgettable cultures — all in one trip.
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
