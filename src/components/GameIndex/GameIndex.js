import classes from './GameIndex.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GameIndex = ({games}) => {
    
    return(
    <div className={classes.root}>
        {games ? games.map(g => {
            return (
                <Card sx={{ width: 250, height: 350 }} key={g.id} className={classes.card}>
                <CardMedia
                    component="img"
                    height="190"
                    image={g.background_image}
                    alt={g.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={classes.name}>
                    {g.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{g.reviews_count} Reviews</Button>
                    <Button size="small">{g.metacritic} Metacritic</Button>
                </CardActions>
            </Card>
            )
        }) : <></>}
    </div>        
    )
}

export default GameIndex;