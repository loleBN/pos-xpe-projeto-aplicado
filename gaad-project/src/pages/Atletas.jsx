import React, { useState } from 'react';
import { Grid, Modal, Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import AtletaCard from './../components/AtletaCard'
import avatar01 from './../static/images/avatar01.jpg';
import avatar02 from './../static/images/avatar02.png';
import CadastroAtleta from '../components/CadastroAtleta';

const atletas = [
  {
    nome: 'Leandro Costa',
    idade: 33,
    altura: 1.60,
    peso: 95,
    modalidade: 'Recurvo',
    categoria: 'Masculino Adulto (50m)',
    imagem: avatar01
  },
  {
    nome: 'João Silva',
    idade: 25,
    altura: 1.80,
    peso: 75,
    modalidade: 'Barebow',
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
  {
    nome: 'Julia Barros',
    idade: 20,
    altura: 1.57,
    peso: 53,
    modalidade: 'Barebow',
    categoria: 'Feminino Adulto (30m)',
    imagem: avatar02
  },
];

const Atletas = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1 }}>
        <h1>Atletas da Escola de Arqueiros Bruno Figuereido</h1>;
        <Button variant="contained" disableElevation  onClick={handleOpen}>
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
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <CadastroAtleta />
        </Box>
      </Modal>
    </>

    );
}

export default  Atletas;

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};