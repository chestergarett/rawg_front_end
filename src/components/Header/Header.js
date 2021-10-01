import classes from './Header.module.css';
import Search from './Search';
import Icons from './Icons';
const Header = () => {    
    return(
        <div className={classes.main}>
            <h2 className={classes.header}>DU-RAWG</h2>
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