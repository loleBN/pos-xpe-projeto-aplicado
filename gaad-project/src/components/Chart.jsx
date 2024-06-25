import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';

const ChartTreino = () => {
  const rodadas = [
    { tiros: ['10', '9', '10', 'X', '8', 'M'] },
    { tiros: ['9', '10', '8', '8', '8', '9'] },
    { tiros: ['10', '9', '10', 'X', '8', 'X'] },
    { tiros: ['X', '9', 'X', 'X', '8', '10'] },
  ];

  const calcularFrequencias = (rodadas) => {
    const freqMap = {};

    rodadas.forEach(rodada => {
      rodada.tiros.forEach(tiro => {
        if (!freqMap[tiro]) {
          freqMap[tiro] = 0;
        }
        freqMap[tiro]++;
      });
    });

    return Object.keys(freqMap).map(key => ({
      name: key,
      value: freqMap[key]
    }));
  };

  const frequencias = calcularFrequencias(rodadas);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE', '#D49F00', '#FF00FF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF6600'];

  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h6">Frequência das Marcações</Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={frequencias}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {frequencias.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Box>
  );
};

export default ChartTreino;
