import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import Icons from "../Icons";
import "./MoviesCard.css";
import {SERVER_URL, UNKNOWN_CARD_TEXT, UNKNOWN_IMAGE_URL, UNKNOWN_TRAILER_URL} from "../../utils/constants";
import {getCorrectDuration} from "../../utils/getCorrectDuration";

const MoviesCard = ({onSavedPage, savedMovies, onSaveHandler, onDeleteHandler, ...props}) => {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        // окрашиваем кнопку лайка, если он фильм нашелся в сохраненных
        if (savedMovies.some((movie) => movie.movieId === props.id)) {
            setIsSaved(true);
        }
    }, [savedMovies, props.id]);

    const handleSave = () => {
        const movieData = {
            country: props.country || UNKNOWN_CARD_TEXT,
            director: props.director || UNKNOWN_CARD_TEXT,
            duration: props.duration,
            year: props.year || UNKNOWN_CARD_TEXT,
            description: props.description || UNKNOWN_CARD_TEXT,
            image: SERVER_URL + props.image.url || UNKNOWN_IMAGE_URL,
            trailerLink: props.trailerLink || UNKNOWN_TRAILER_URL,
            nameRU: props.nameRU || props.nameEN || UNKNOWN_CARD_TEXT,
            nameEN: props.nameEN || props.nameRU || UNKNOWN_CARD_TEXT,
            thumbnail: SERVER_URL + props.image.formats.thumbnail.url || UNKNOWN_IMAGE_URL,
            movieId: props.id,
        };
        onSaveHandler(movieData, setIsSaved);
    };

    const handleDelete = () => {
        // условие для удаления с обоих страниц
        // так как ключи в объектах отличаются
        onDeleteHandler(props._id || props.id, setIsSaved);
    };

    return (
        <li className="movies-card">
            <a
                className="movies-card__link"
                href={props.trailerLink}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="movies-card__image"
                    src={onSavedPage ? props.image : SERVER_URL + props.image.url}
                    alt={props.nameRU}
                />
            </a>
            <div className="movies-card__middle">
                <h2 className="movies-card__title">{props.nameRU}</h2>
                <Button
                    className={`button_type_card movies-card__button`}
                    handler={onSavedPage
                        ? handleDelete
                        : isSaved
                            ? handleDelete
                            : handleSave}
                >
                    {onSavedPage ? (<Icons.Delete/>) : (isSaved ? (<Icons.Like isLike={true}/>) : (
                        <Icons.Like isLike={false}/>))}
                </Button>
            </div>
            <p className="movies-card__duration">{getCorrectDuration(props.duration)}</p>
        </li>
    );
};

export default MoviesCard;
