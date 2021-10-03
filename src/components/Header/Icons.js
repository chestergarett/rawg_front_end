import classes from './Icons.module.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GitHubIcon from '@mui/icons-material/GitHub';

const Icons = () => {
    return(
        <div className={classes.root}>
            <NotificationsIcon className={classes.icons}/>
            <AddIcon className={classes.icons}/>
            <MoreHorizIcon className={classes.icons}/>
            <a href="https://github.com/chestergarett/rawg_front_end" target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.icons}/>
            </a>
        </div>
    )
}

export default Icons;