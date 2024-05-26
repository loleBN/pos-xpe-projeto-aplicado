// src/components/RegistroTreino.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Select, InputLabel, FormControl, Typography, Checkbox, FormControlLabel } from '@mui/material';

const RegistroTreino = () => {
  const [treino, setTreino] = useState({
    nomeAtleta: '',
    dataTreino: '',
    inicioTreino: '',
    fimTreino: '',
    descricao: '',
    distancia: '',
    score: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTreino({
      ...treino,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // adicionar a lógica para salvar os dados do treino
    console.log(treino);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Registro de Treino
      </Typography>
      <TextField
        label="Nome do Atleta"
        name="nomeAtleta"
        value={treino.nomeAtleta}
        onChange={handleChange}
        required
      />
      <TextField
        label="Data do Treino"
        name="dataTreino"
        type="date"
        value={treino.dataTreino}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Início do Treino"
        name="inicioTreino"
        type="time"
        value={treino.inicioTreino}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Fim do Treino"
        name="fimTreino"
        type="time"
        value={treino.fimTreino}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
      />
      <FormControl required>
        <InputLabel>Descrição do Treino</InputLabel>
        <Select
          name="descricao"
          value={treino.descricao}
          onChange={handleChange}
        >
          <MenuItem value="Academia">Academia</MenuItem>
          <MenuItem value="Corrida">Corrida</MenuItem>
          <MenuItem value="Caminhada">Caminhada</MenuItem>
          <MenuItem value="Tiros">Tiros</MenuItem>
          {/* Adicione mais opções conforme necessário */}
        </Select>
      </FormControl>
      {treino.descricao === 'Tiros' && (
        <>
        <TextField
          label="Distancia de tiro"
          name="distancia"
          type="number"
          value={treino.distancia}
          onChange={handleChange}
        /> 
        <TextField
          label="Score"
          name="score"
          type="number"
          value={treino.score}
          onChange={handleChange}
      />
        </>
      )}

      <Button type="submit" variant="contained" color="primary">
        Registrar Treino
      </Button>
    </Box>
  );
};

export default RegistroTreino;
