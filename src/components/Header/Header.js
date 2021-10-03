import classes from './Header.module.css';
import Search from './Search';
import Icons from './Icons';

import { Link } from 'react-router-dom';

const Header = () => {    
    return(
        <div className={classes.main}>
            <Link to='/' className={classes.header}>
                <h2>DU-RAWG</h2>
            </Link>
            <div className={classes.searchbar}>
                <Search/>
            </div>
            <div className={classes.headerIcons}>
                <Icons/>
            </div>
        </div>
    )
}

export default Header;