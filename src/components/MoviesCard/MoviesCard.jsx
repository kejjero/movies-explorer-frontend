import React, {useState} from "react";
import Button from "../Button/Button";
import Icons from "../Icons";
import "./MoviesCard.css";

const MoviesCard = ({item, isSave=false}) => {
    const [isLike, setIsLike] = useState(false);
    const [isVisible, setIsVisible] = useState(false)

    const handleLikeCard = () => {
        setIsLike(!isLike)
    }

    return (
        <li
            className="movies-card"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <img
                className="movies-card__image"
                src={item.image}
                alt={item.title}
            />
            <div className="movies-card__middle">
                <h2 className="movies-card__title">{item.title}</h2>
                <Button className="button_type_card" type="button" handler={handleLikeCard}>
                    {isSave ? (isVisible && <Icons.Delete />) : <Icons.Like isLike={isLike}/>}
                </Button>
            </div>
            <p className="movies-card__duration">
                {item.duration}
            </p>
        </li>
    );
};

export default MoviesCard;
