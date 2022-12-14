import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({allMovies, onSavedPage, onSaveHandler, onDeleteHandler, savedMovies}) => {


    return (
        <ul
            className={`movies-list movies-page__movies-list
      ${onSavedPage ? "movies-page__movie-list_type_save" : ""}`}
        >
            {allMovies &&
                allMovies.map((movie) => (
                    <MoviesCard
                        key={movie._id || movie.id}
                        onSaveHandler={onSaveHandler}
                        onDeleteHandler={onDeleteHandler}
                        savedMovies={savedMovies || allMovies}
                        onSavedPage={onSavedPage}
                        {...movie}
                    />
                ))}
        </ul>
    );
};

export default MoviesCardList;
