import classes from './GameShow.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const GameShow = () => {
    const { slug } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [isSSLoading, setIsSSLoading] = useState(false)
    const [ details, setDetails] = useState({
        background_image: '',
        background_image_additional: '',
        description: '',
        released: '',
        rating: '',
        store: [],
        developers: [],
        genres: [],
        tags: [],
        name: '',
    })
    const [screenshots, setScreenshots] = useState([])

    useEffect( () => {
        setIsLoading(true)
        axios.get(`https://chestergarett-rawg.herokuapp.com/api/game-details?id=${slug}`)
        .then(res => {
            setDetails({...details,
                background_image: res.data.data.background_image,
                background_image_additional: res.data.data.background_image,
                description: res.data.data.description_raw,
                released: res.data.data.released,
                rating: res.data.data.rating,
                store: res.data.data.store,
                developers: res.data.data.developers,
                genres: res.data.data.genres,
                tags: res.data.data.tags,
                name: res.data.data.name
            })
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false)
        })
    }, [])

    useEffect( () => {
        setIsSSLoading(true)
        axios.get(`https://chestergarett-rawg.herokuapp.com/api/game-screenshots?id=${slug}`)
        .then(res => {
            setScreenshots(res.data.data.results)
            setIsSSLoading(false)
        })
        .catch(err => {
            console.log(err)
            setIsSSLoading(false)})
    }, [])

    return (
        <div className={classes.root}>
            {!isLoading ? 
                <Card className={classes.card}>
                <CardMedia
                    component="img"
                    image={details.background_image}
                    alt={details.name}
                    className={classes.main_picture}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h4" component="div" className={classes.title}>
                        {details.name}
                    </Typography>
                    <CardActions className={classes.subheader}>
                        <Button size="small">{details.rating}   <span className={classes.label}>&nbsp;Rating</span></Button>
                        <Button size="small">{moment(`${details.released}`).format("MMM Do YYYY")} <span className={classes.label}>&nbsp;Released</span></Button>
                    </CardActions>
                    <CardActions className={classes.subheader_genres}>
                        {details.genres.map(g => {
                            return(
                                <Button variant="contained" key={g.slug}>{g.name}</Button>
                            )
                        })}
                    </CardActions>
                    <CardActions className={classes.subheader_tags}>
                        {details.tags.slice(0,3).map(t => {
                            return(
                                <Button key={t.slug}>#{t.name}</Button>
                            )
                        })}
                    </CardActions>
                    <Typography gutterBottom variant="body2" component="div" className={classes.description}>
                        {details.description}
                    </Typography>
                    <Stack direction="row" spacing={2} className={classes.developers}>
                        <span className={classes.sublabel}>Developer&nbsp;</span>
                        {details.developers.map(d => {
                            return(
                                <Item key={d.slug}>{d.name}</Item>
                            )
                        })}
                    </Stack>
                </CardContent>
                </Card> :
            <LoadingSpinner/>
            }  
            {isSSLoading ? <LoadingSpinner/>:
                <Card className={classes.media}>
                    {screenshots.map( s => {
                        return (
                            <CardMedia
                                component="img"
                                image={s.image}
                                alt={s.id}
                                key={s.id}
                                className={classes.mediaItem}
                            />
                        )
                    })}
                </Card>
            }
        </div>
    )
}

export default GameShow;
