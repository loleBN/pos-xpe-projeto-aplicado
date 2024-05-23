import * as React from 'react';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

  return (
    <Card sx={{ maxWidth: 400, width: 300 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={atleta.nome}
        subheader={atleta.modalidade}
      /> */}
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
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Descrição do treinos
          </Typography>
          <Typography paragraph>
            Resumo dos scores
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default  AtletaCard;