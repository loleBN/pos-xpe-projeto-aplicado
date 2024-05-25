import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';

const CadastroAtleta = () => {
  const [atleta, setAtleta] = useState({
    nome: '',
    idade: '',
    altura: '',
    peso: '',
    modalidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAtleta({
      ...atleta,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(atleta);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Atleta
      </Typography>
      <TextField
        label="Nome"
        name="nome"
        value={atleta.nome}
        onChange={handleChange}
        required
      />
      <TextField
        label="Idade"
        name="idade"
        type="number"
        value={atleta.idade}
        onChange={handleChange}
        required
      />
      <TextField
        label="Altura (m)"
        name="altura"
        type="number"
        step="0.01"
        value={atleta.altura}
        onChange={handleChange}
        required
      />
      <TextField
        label="Peso (kg)"
        name="peso"
        type="number"
        step="0.1"
        value={atleta.peso}
        onChange={handleChange}
        required
      />
      <FormControl required>
        <InputLabel>Modalidade</InputLabel>
        <Select
          name="modalidade"
          value={atleta.modalidade}
          onChange={handleChange}
        >
          <MenuItem value="Recurvo">Recurvo</MenuItem>
          <MenuItem value="Barebow">Barebow</MenuItem>
          <MenuItem value="Composto">Composto</MenuItem>
        </Select>
      </FormControl>
      <FormControl required>
        <InputLabel>Categoria</InputLabel>
        <Select
          name="categoria"
          value={atleta.categoria}
          onChange={handleChange}
        >
          <MenuItem value="Master">Master</MenuItem>
          <MenuItem value="Adulto">Adulto</MenuItem>
          <MenuItem value="Adulto Paralímpico">Adulto Paralímpico</MenuItem>
          <MenuItem value="sub 21 ">sub 21</MenuItem>
          <MenuItem value="sub 21 Paralímpico">sub 21 Paralímpico</MenuItem>
          <MenuItem value="sub 18">sub 18</MenuItem>
          <MenuItem value="sub 18 Paralímpico">sub 18 Paralímpico</MenuItem>
          <MenuItem value="sub 15">sub 15</MenuItem>
        </Select>
      </FormControl>
      <FormControl required>
        <InputLabel>Distancia</InputLabel>
        <Select
          name="distancia"
          value={atleta.distancia}
          onChange={handleChange}
        >
          <MenuItem value="70">70 m</MenuItem>
          <MenuItem value="60">60 m</MenuItem>
          <MenuItem value="50">50 m</MenuItem>
          <MenuItem value="30">30 m</MenuItem>
          <MenuItem value="18">18 m</MenuItem>

        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </Box>
  );
};

export default CadastroAtleta;
