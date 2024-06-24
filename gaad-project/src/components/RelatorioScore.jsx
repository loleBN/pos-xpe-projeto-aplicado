import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

  const  rodadas = [
    { tiros: ['10', '9', '10', 'X', '8', 'M'] },
    { tiros: ['7', '6', '5', '8', '8', '9'] },
    { tiros: ['10', '9', '10', 'X', '8', '8'] },
    { tiros: ['X', '9', 'X', 'X', '8', '10'] }

  ]
  const columns = [
    { field: 'id', headerName: 'Rodada', width: 90 },
    { field: 'tiro1', headerName: 'Tiro 1', width: 150, editable: true },
    { field: 'tiro2', headerName: 'Tiro 2', width: 150, editable: true },
    { field: 'tiro3', headerName: 'Tiro 3', width: 150, editable: true },
    { field: 'tiro4', headerName: 'Tiro 4', width: 150, editable: true },
    { field: 'tiro5', headerName: 'Tiro 5', width: 150, editable: true },
    { field: 'tiro6', headerName: 'Tiro 6', width: 150, editable: true },
  ];

  const rows = rodadas.map((rodada, index) => ({
    id: index + 1,
    tiro1: rodada.tiros[0],
    tiro2: rodada.tiros[1],
    tiro3: rodada.tiros[2],
    tiro4: rodada.tiros[3],
    tiro5: rodada.tiros[4],
    tiro6: rodada.tiros[5],
  }));


export default function RelatorioScore() {
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
    />
  </div>
  
  );
}
