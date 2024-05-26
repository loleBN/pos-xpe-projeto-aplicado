import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(data, nome, duracao, descricao) {
  return {
    data,
    nome,
    duracao,
    descricao,
    history: [
      {
        round1 : '10,10,8,9,10',
        round2: '10,7,8,9,10',
        round3: '10,7,10,9,10'
      }
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.data}
        </TableCell>
        <TableCell align="right">{row.nome}</TableCell>
        <TableCell align="right">{row.duracao}</TableCell>
        <TableCell align="right">{row.descricao}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    data: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        score: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired
  }).isRequired,
};

const rows = [
  createData('2024-04-25', 'Leandro Costa', "2:00","Academia"),
  createData('2024-04-25', 'Leandro Costa', "3:00","Tiros"),
  createData('2024-04-25', 'Maria Souza', "2:00","Corrida"),
  createData('2024-04-25', 'Maria Souza', "1:00","Academia"),
  createData('2024-04-25', 'Joao Silva', "2:00","Tiros"),
];

export default function RelatorioTreino() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Data</TableCell>
            <TableCell align="right">Atleta</TableCell>
            <TableCell align="right">Duração Treino</TableCell>
            <TableCell align="right">Descrição Treino</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
