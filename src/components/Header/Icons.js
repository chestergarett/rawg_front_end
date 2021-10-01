import classes from './Icons.module.css';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {RiAddFill} from 'react-icons/ri';
import {BsThreeDots} from 'react-icons/bs';

const Icons = () => {
    return(
        <div className={classes.root}>
            <IoIosNotificationsOutline size={30} className={classes.icons}/>
            <RiAddFill size={30} className={classes.icons}/>
            <BsThreeDots size={30} className={classes.icons}/>
        </div>
    )
}

export default Icons;