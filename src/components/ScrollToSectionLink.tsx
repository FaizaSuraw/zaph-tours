import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Button } from '@mui/material';

interface ScrollToSectionLinkProps {
  to: string;
  label: string;
  sx?: object;
}

const ScrollToSectionLink: React.FC<ScrollToSectionLinkProps> = ({ to, label, sx }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === '/') {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    } else {
      navigate('/', { state: { scrollTo: to } });
    }
  };

  return (
    <Button onClick={handleClick} sx={sx}>
      {label}
    </Button>
  );
};

export default ScrollToSectionLink;
