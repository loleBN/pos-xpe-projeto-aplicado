import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';
import AtletaCard from './../components/AtletaCard'
import avatar01 from './../static/images/avatar01.jpg';
import avatar02 from './../static/images/avatar02.png';

const atletas = [
  {
    nome: 'João Silva',
    idade: 25,
    altura: 1.80,
    peso: 75,
    modalidade: 'Recurvo Olimpico',
    categoria: 'Masculino Adulto (30m)',
    imagem: avatar01
  },
  {
    nome: 'Maria Souza',
    idade: 22,
    altura: 1.70,
    peso: 65,
    modalidade: 'Barebow',
    categoria: 'Feminino Adulto (30m)',
    imagem: avatar02
  },
];

const Atletas = () => {
    return (
      <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1 }}>
        <h1>Atletas da Escola de Arqueiros Bruno Figuereido</h1>;
        <Button variant="contained" disableElevation>
          Adicionar Atleta
        </Button>
      </Box>
      <Grid container spacing={2} justifyContent="center">
      {atletas.map((atleta) => (
        <Grid item key={atleta.nome}>
          <AtletaCard atleta={atleta} />
        </Grid>
      ))}
    </Grid>
    </>

    );
}
  
export default  Atletas;