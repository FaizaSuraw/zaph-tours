import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', pt: 8, pb: 5 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          spacing={6}
        >
          <Stack spacing={2} maxWidth={300}>
            <Typography variant="h6" fontWeight="bold" color="secondary">
              Zaph Tours
            </Typography>
            <Typography variant="body2" color="gray">
              Discover Kenya like never before. Safari adventures, beach escapes,
              and cultural treasures await.
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <IconButton color="inherit" size="small" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" size="small" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" size="small" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" size="small" href="https://youtube.com" target="_blank">
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight="bold" color="secondary">
              Quick Links
            </Typography>
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/destinations" underline="hover" color="inherit">
              Destinations
            </Link>
            <Link href="/trip-types" underline="hover" color="inherit">
              Trip Types
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact Us
            </Link>
          </Stack>

          {/* Contact Info */}
          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight="bold" color="secondary">
              Contact Info
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">Nairobi, Kenya</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+254 712 345 678</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">info@zaphtours.co.ke</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ my: 4, backgroundColor: '#444' }} />

        <Typography variant="body2" align="center" color="gray">
          &copy; {new Date().getFullYear()} Zaph Tours. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
