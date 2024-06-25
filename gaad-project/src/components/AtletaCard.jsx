import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import ChartTreino from './Chart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const  AtletaCard = ({atleta}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 400, width: 300 }}>
      <CardMedia
        component="img"
        height="240"
        image={atleta.imagem}
        alt={atleta.nome}
      />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {atleta.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Idade: {atleta.idade} anos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Altura: {atleta.altura} m
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Peso: {atleta.peso} kg
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Modalidade: {atleta.modalidade}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoria: {atleta.categoria}
        </Typography>
     </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="edit info">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="view point details">
          <AssessmentIcon onClick={handleOpen}/>
        </IconButton>

      </CardActions>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
           >
            <Box sx={modalStyle}>
            <ChartTreino />
            </Box>
          </Modal>
    </Card>
  );
}

export default  AtletaCard;

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