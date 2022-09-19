import "./searchForm.scss"
import {useState} from "react"
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    return(
        <section className="searchForm">
            <div className="searchForm__wrapper container">
                <div className="searchForm__form-wrapper">
                    <input
                        className="searchForm__input"
                        value={searchValue}
                        onChange={(evt) => setSearchValue(evt.target.value)}
                        type="text"
                        placeholder="Фильм"
                    />
                    <IconButton style={{backgroundColor: '#3456F3'}} size="small">
                        <SearchIcon style={{color: '#fff'}} />
                    </IconButton>
                </div>
                <div className="searchForm__switch">
                    <p className="searchForm__switch-title">Короткометражки</p>
                    <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
        </section>
    )
}

export default SearchForm;