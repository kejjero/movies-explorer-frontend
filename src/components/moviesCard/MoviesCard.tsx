import React, {useState} from "react";
import "./moviesCard.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import {IconButton} from '@mui/material';

const MoviesCard: React.FC<any> = ({item, isSaved = false}) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <article
            className="moviesCard"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <img className="moviesCard__preview" src={item.image} alt={item.title}/>
            <div className="moviesCard__wrapper">
                <h2 className="moviesCard__title">{item.title}</h2>
                {
                    isSaved ?
                        <IconButton className={`moviesCard__iconButton ${visible && "moviesCard__iconButton_active"}`}>
                            <CloseIcon sx={{color: '#000', width: '15px'}}/>
                        </IconButton>
                        :
                        <Checkbox
                            size="small"
                            sx={{bgcolor: '#F5F5F5', width: '24px', height: '24px'}}
                            icon={<FavoriteIcon style={{width: '15px', color: '#fff'}}/>}
                            checkedIcon={<FavoriteIcon sx={{color: '#FF3055', width: '15px'}}/>}
                        />
                }
            </div>
            <p className="moviesCard__time">{item.time}</p>
        </article>
    )
}

export default MoviesCard;