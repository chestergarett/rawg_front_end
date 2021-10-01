import classes from './Search.module.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import {FiSearch} from 'react-icons/fi';

const Search = () => {
    return(
        <Paper component="form" className={classes.root} style={{background: '#23272a'}}>
            <InputBase
            className={classes.input}
            placeholder="Search"
            style = {{ fontSize: '10px', color: 'white'}}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="Search games">
                <FiSearch size={15} style={{color: 'whitesmoke'}}/>
            </IconButton>
        </Paper>
    )
}

export default Search;
