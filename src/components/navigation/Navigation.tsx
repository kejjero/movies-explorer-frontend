import Button from '@mui/material/Button';
import "./navigation.scss"
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import {Link} from "react-router-dom"

const Navigation = () => {
    const styleChip = {backgroundColor: '#fff'}
    const styleAvatar = {color: '#2BE080'}
    const titleFilms = [
        {title: "Фильмы", link: "/movies"},
        {title: "Сохранённые фильмы", link: "/saved-movies"}
    ]

    return(
        <div className="navigation">
            <ul className="navigation__movies">
                {
                    titleFilms.map((item, index) => (
                      <li key={index} className="navigation__movies-link">
                          <Link to={item.link}>{item.title}</Link>
                      </li>
                    ))
                }
            </ul>
            <button className="navigation__sign-up">Регистрация</button>
            <Button
                style={{
                    backgroundColor: '#2BE080',
                    textTransform: 'none',
                    fontSize: '12px',
                    color: '#000000',
                    width: '76px',
                    padding: '0',
                    height: '32px'
            }}
                className="navigation__sign-in" variant="contained"
            >
                Войти
            </Button>
            <Link to="/profile" className="navigation__profile">
                <Chip
                    style={styleChip}
                    label="Аккаунт"
                    avatar={<FaceIcon style={styleAvatar}/>}
                    onClick={() => console.log('Chip')}
                />
            </Link>
        </div>
    )
}

export default Navigation;