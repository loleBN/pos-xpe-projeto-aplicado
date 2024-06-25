// src/components/RegistroTreino.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Select, InputLabel, FormControl, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const RegistroTreino = () => {

  const initialState = {
    nomeAtleta: '',
    dataTreino: '',
    horarioTreino: '',
    horarioDormiu: '',
    horarioAcordou: '',
    inicioTreino: '',
    fimTreino: '',
    descricao: '',
    distancia: '',
    score: '',
    realizouTiros: false,
    rodadas: [
      { tiros: ['', '', '', '', '', ''] }
    ]
  };

  const [treino, setTreino] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTreino({
      ...treino,
      [name]: type === 'checkbox' ? checked : value
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // adicionar a lógica para salvar os dados do treino
    console.log(treino);
  };

const columns = [
    { field: 'id', headerName: 'Rodada', width: 90 },
    { field: 'tiro1', headerName: 'Tiro 1', width: 150, editable: true },
    { field: 'tiro2', headerName: 'Tiro 2', width: 150, editable: true },
    { field: 'tiro3', headerName: 'Tiro 3', width: 150, editable: true },
    { field: 'tiro4', headerName: 'Tiro 4', width: 150, editable: true },
    { field: 'tiro5', headerName: 'Tiro 5', width: 150, editable: true },
    { field: 'tiro6', headerName: 'Tiro 6', width: 150, editable: true },
  ];

  const rows = treino.rodadas.map((rodada, index) => ({
    id: index + 1,
    tiro1: rodada.tiros[0],
    tiro2: rodada.tiros[1],
    tiro3: rodada.tiros[2],
    tiro4: rodada.tiros[3],
    tiro5: rodada.tiros[4],
    tiro6: rodada.tiros[5],
  }));

  const calcularPontuacoes = () => {
    const pontuacoes = treino.rodadas.map((rodada, index) => ({
      name: `Rodada ${index + 1}`,
      value: rodada.tiros.reduce((acc, tiro) => {
        if (tiro === 'X') return acc + 10;
        if (tiro === 'M') return acc;
        return acc + parseInt(tiro, 10);
      }, 0)
    }));
    return pontuacoes;
  };

  const pontuacoes = calcularPontuacoes();
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE', '#D49F00'];
  
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
          <Typography variant="h6">Rodadas de Tiros</Typography>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
          <Button variant="outlined" color="primary" onClick={adicionarRodada} startIcon={<AddCircleIcon />}>
            Adicionar Rodada
          </Button>
        </>
      )}

      <Button type="submit" variant="contained" color="primary">
        Registrar Treino
      </Button>

      {treino.descricao === 'Tiros' && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Pontuações Totais</Typography>
          <PieChart width={400} height={400}>
            <Pie
              data={pontuacoes}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pontuacoes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
      )}

    </Box>
  );
};

export default RegistroTreino;
