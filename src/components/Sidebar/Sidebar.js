import classes from './Sidebar.module.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Sidebar = ({genres}) => {
    
    return (
        <div className={classes.root}>
            <h2>Home</h2>
            <h2>Reviews</h2>
            <div>
                <h2>Platforms</h2>
            </div>
            <div>
                <h2>Genres</h2>
                <ul>
                {genres ? genres.map(g => {
                    return(
                        <ListItem alignItems="flex-start" key={g.id}>
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src={g.image_background} variant="square"/>
                            </ListItemAvatar>
                            <ListItemText primary={g.name} key={g.id}/>
                        </ListItem>
                    )
                }): <></>}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;