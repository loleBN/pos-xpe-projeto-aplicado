import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Modal } from '@mui/material';
import RegistroTreino from '../components/RegistroTreino';
import RelatorioTreino from '../components/RelatorioTreino';
import RelatorioScore from '../components/RelatorioScore';
import RegistroScore from '../components/RegistroScore';

const Treinos = () => {
  const [open, setOpen] = useState(false);
  const [openScore, setScoreOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleScoreOpen = () => setScoreOpen(true);
  const handleScoreClose = () => setScoreOpen(false);
  return (
  <>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1 }}>
    <h1>Diario de Treinos</h1>;
    <Button variant="contained" disableElevation onClick={handleOpen}>
      Adicionar Treino
    </Button>
  </Box>
  <RelatorioTreino />
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <RegistroTreino />
        </Box>
      </Modal>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1 }}>
  <h1>Diario de Scores</h1>;
  <Button variant="contained" disableElevation onClick={handleScoreOpen}>
    Adicionar Score
  </Button>
  </Box>
  <RelatorioScore />
  <Modal
        open={openScore}
        onClose={handleScoreClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <RegistroScore />
        </Box>
      </Modal>
</>
  )};
  
  export default Treinos;

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