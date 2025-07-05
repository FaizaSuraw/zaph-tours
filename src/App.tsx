import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TripTypes from './pages/TripTypes';
import { CssBaseline } from '@mui/material';
import ContactUs from './pages/Contact';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/trip-types" element={<TripTypes />} />
      </Routes>
    </>
  );
};

export default App;
