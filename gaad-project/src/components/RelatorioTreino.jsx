import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function createData(id, data, nome, duracao, descricao) {
  return {
    id,
    data,
    nome,
    duracao,
    descricao,
  };
}

const columns = [
  { field: 'data', headerName: 'Data', width: 200 },
  { field: 'nome', headerName: 'Atleta', width: 250, editable: true },
  { field: 'duracao', headerName: 'Duração Treino', width: 150, editable: true },
  { field: 'descricao', headerName: 'Descrição Treino', width: 250, editable: true }
];
const rows = [
  createData(1,'2024-04-25', 'Leandro Costa', "2:00","Academia"),
  createData(2, '2024-04-25', 'Leandro Costa', "3:00","Tiros"),
  createData(3, '2024-04-25', 'Maria Souza', "2:00","Corrida"),
  createData(4, '2024-04-25', 'Maria Souza', "1:00","Academia"),
  createData(5, '2024-04-25', 'Joao Silva', "2:00","Tiros"),
];

export default function RelatorioTreino() {
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
