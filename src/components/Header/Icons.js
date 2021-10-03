import classes from './Icons.module.css';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {RiAddFill} from 'react-icons/ri';
import {BsThreeDots} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

const Icons = () => {
    return(
        <div className={classes.root}>
            <IoIosNotificationsOutline size={30} className={classes.icons}/>
            <RiAddFill size={30} className={classes.icons}/>
            <BsThreeDots size={30} className={classes.icons}/>
            <a href="https://github.com/chestergarett/rawg_front_end" target="_blank">
                <AiFillGithub size={30} className={classes.icons}/>
            </a>
        </div>
    )
}

export default Icons;