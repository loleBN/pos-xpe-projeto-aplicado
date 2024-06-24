// src/components/RegistroTreino.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const RegistroScore = () => {
  const [treino, setTreino] = useState({
    idAtleta: '',
    rodadas: [
      { tiros: ['', '', '', '', '', ''] }
    ]
  });

  const adicionarRodada = () => {
    setTreino({
      ...treino,
      rodadas: [...treino.rodadas, { tiros: ['', '', '', '', '', ''] }]
    });
  };
  const handleTiroChange = (indexRodada, indexTiro, value) => {
    const novasRodadas = treino.rodadas.map((rodada, i) => {
      if (i === indexRodada) {
        const novosTiros = rodada.tiros.map((tiro, j) => (j === indexTiro ? value : tiro));
        return { ...rodada, tiros: novosTiros };
      }
      return rodada;
    });
    setTreino({ ...treino, rodadas: novasRodadas });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTreino({
      ...treino,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(treino);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Registro de Score
      </Typography>
      <TextField
        label="Id Atleta"
        name="idAtleta"
        value={treino.nomeAtleta}
        onChange={handleChange}
        required
      />
        <Typography variant="h6">Rodadas de Tiros</Typography>
          {treino.rodadas.map((rodada, indexRodada) => (
            <Box key={indexRodada} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">Rodada {indexRodada + 1}</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {rodada.tiros.map((tiro, indexTiro) => (
                  <TextField
                    key={indexTiro}
                    label={`Tiro ${indexTiro + 1}`}
                    name={`tiro-${indexRodada}-${indexTiro}`}
                    value={tiro}
                    onChange={(e) => handleTiroChange(indexRodada, indexTiro, e.target.value)}
                    required
                    inputProps={{ maxLength: 2 }}
                    sx={{ width: '100px' }}
                  />
                ))}
              </Box>
       </Box>
      ))}
      <Button variant="outlined" color="primary" onClick={adicionarRodada}>
        Adicionar Rodada
       </Button>

      <Button type="submit" variant="contained" color="primary">
        Registrar Score
      </Button>
    </Box>
  );
};

export default RegistroScore;
