import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from './../static/images/silhueta-arqueiro.jpg';


const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <img src={logo} alt="Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <Typography variant="h4">Bem-vindo à Escola de Arqueiros</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Aqui você encontra os melhores treinos e atletas.
      </Typography>
    </Box>
  );
  };
  
  export default Home;