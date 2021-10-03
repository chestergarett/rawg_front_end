import classes from './Sidebar.module.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Sidebar = ({genres, platforms, tags}) => {
    
    return (
        <div className={classes.root}>
            <div>
                <h2 className={classes.header}>Tags</h2>
                <ul className={classes.tags}>
                {tags ? tags.slice(0,5).map(t => {
                    return(
                        <ListItem alignItems="flex-start" key={t.id}>
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src={t.image_background} />
                            </ListItemAvatar>
                            <ListItemText primary={t.name} key={t.id}/>
                        </ListItem>
                    )
                }): <></>}
                </ul>
            </div>
            <div>
                <h2 className={classes.header}>Platforms</h2>
                <ul className={classes.platforms}>
                {platforms ? platforms.slice(0,5).map(p => {
                    return(
                        <ListItem alignItems="flex-start" key={p.id}>
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src={p.image_background} variant="square"/>
                            </ListItemAvatar>
                            <ListItemText primary={p.name} key={p.id}/>
                        </ListItem>
                    )
                }): <></>}
                </ul>
            </div>
            <div>
                <h2 className={classes.header}>Genres</h2>
                <ul className={classes.genres}>
                {genres ? genres.slice(0,5).map(g => {
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