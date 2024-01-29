import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Banner from '../assets/images/gym312.jpg';
import TabletBanner from '../assets/images/gym3126.jpg'; // Add the path to your tablet image
import HeroBannerImage from '../assets/images/banner.png';
import { HiArrowRight, HiArrowUpLeft, HiArrowDownLeft } from 'react-icons/hi2';
import { useTheme } from '@mui/material/styles';

const HeroBanner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        mt: '30px',
        position: 'relative',
        p: '20px',
        backgroundImage: `url(${Banner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align text to the left
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
          backgroundImage: `url(${HeroBannerImage})`, // Use different image for small screens (phones)
        },
        [theme.breakpoints.between('sm', 'md')]: {
          backgroundImage: `url(${TabletBanner})`, // Use different image for tablets
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Background Overlay */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: {
              xs: 'rgba(0, 0, 0, 0.7)',
              sm: 'rgba(0, 0, 0, 0.7)',
              md: 'rgba(0, 0, 0, 0.1)',  
              lg: 'rgba(0, 0, 0, 0.1)',
              xl: 'rgba(0, 0, 0, 0.1)',
            },
            position: 'absolute',
          }}
        />
      </Box>

      {/* Container for Fitness Hub Heading */}
      <Box sx={{ position: 'relative', zIndex: 1, marginLeft: '20px' }}>
        {/* Your content with Fira Sans font */}
        <Typography
          fontWeight={900}
          fontSize={{ xs: 45, lg: 80 }} // Adjust font size for small and large screens
          fontFamily="'Fira Sans', sans-serif"
          color={'#ffff'}
        >
          Fitness Hub
        </Typography>
      </Box>

      {/* Container for Text Content */}
      <Box sx={{ position: 'relative', zIndex: 1, marginLeft: '20px' }}>
        <Typography
          fontWeight={600}
          sx={{
            fontSize: { lg: '48px', xs: '30px' },
            fontFamily: "'Lobster', cursive",
          }}
          color="#ffd700"
          mb="30px"
          mt="10px"
        >
          Sweat <HiArrowRight color='#fff8df' /> Smile
          <br />
          <HiArrowUpLeft color='#fff8df' style={{ marginLeft: '25px', marginRight: '2px' }} />
          Repeat
          <HiArrowDownLeft color='#fff8df' style={{ marginLeft: '9px', marginRight: '3px' }} />
        </Typography>
        
        <Button 
          style={{marginLeft: '10px'}}
          variant="contained"
          color="error"
          href="#exercises"
          fontFamily="'Fira Sans', sans-serif"
          sx={{ backgroundColor: '#ff2625', padding: '10px' }}
        >
          Explore Exercises
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
