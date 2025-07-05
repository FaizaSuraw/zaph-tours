import Slider from 'react-slick';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Rating,
  Paper,
} from '@mui/material';

const testimonials = [
  {
    name: 'James Otieno',
    avatar: '/assets/james.jpg',
    rating: 5,
    comment: 'Zaph Tours gave me the best safari experience ever! Highly recommended.',
  },
  {
    name: 'Amina Yusuf',
    avatar: '/assets/amina.jpg',
    rating: 4,
    comment: 'The team was professional, and every destination was breathtaking.',
  },
  {
    name: 'Brian Mwangi',
    avatar: '/assets/brian.jpg',
    rating: 5,
    comment: 'Loved every moment. From wildlife to culture, it was unforgettable!',
  },
  {
    name: 'Grace Kimani',
    avatar: '/assets/grace.jpg',
    rating: 4.5,
    comment: 'Super organized tours and amazing support throughout. Thank you Zaph!',
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: 10, backgroundColor: '#fff' }}>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          fontFamily="Pacifico, cursive"
          fontWeight="bold"
          color="primary.main"
          mb={6}
        >
          What Our Customers Say
        </Typography>
        <Slider {...settings}>
          {testimonials.map((review, index) => (
            <Box key={index} px={2}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 4, height: '100%' }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={review.avatar} alt={review.name} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {review.name}
                    </Typography>
                    <Rating value={review.rating} precision={0.5} readOnly />
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  “{review.comment}”
                </Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialsCarousel;
