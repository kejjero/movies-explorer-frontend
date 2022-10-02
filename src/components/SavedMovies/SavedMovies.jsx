import React, {useEffect, useState} from "react";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import {filterMovies, findOnlyShortMovies} from "../../utils/filters";
import {mainApi} from "../../utils/MainApi";

const SavedMovies = ({  savedMovies, setSavedMovies, message, cardErrorHandler}) => {
    const [shortFilmsCheck, setShortFilmsCheck] = useState(false);
    const [moviesForRender, setMoviesForRender] = useState(savedMovies);
    const [resultMessage, setResultMessage] = useState("");
    const token = localStorage.getItem("token");

    useEffect(() => setMoviesForRender(savedMovies), [savedMovies]);

    useEffect(() => {
        if (message) {
            setResultMessage(message);
        }
    }, [message]);

    const deleteMovie = (movieId, likeHandler) => {
        mainApi
            .removeMovie(movieId, token)
            .then(() => {
                likeHandler(false);
                // при удалении меняем оба состояния, чтобы карточка не отобразилась
                setSavedMovies((state) => state.filter((m) => m._id !== movieId));
                setMoviesForRender((state) => state.filter((m) => m._id !== movieId));
            })
            .catch((e) => e.json())
            .then((e) => {
                if (e?.message) {
                    cardErrorHandler(e.message);
                }
            })
            .catch((e) => console.log(e));
    };

    const submitHandler = (isOnlyShortFilms, searchQuery) => {
        // фильтруем
        const filteredMovies = filterMovies(searchQuery, savedMovies);
        const filteredShortMovies = findOnlyShortMovies(filteredMovies);

        // следим при этом за чекбоксом
        if (isOnlyShortFilms) {
            setMoviesForRender(filteredShortMovies);
            if (filteredShortMovies.length === 0 && !message) {
                setResultMessage("Ничего не найдено");
            }
        } else {
            setMoviesForRender(filteredMovies);
            if (filteredMovies.length === 0 && !message) {
                setResultMessage("Ничего не найдено");
            }
        }
    };

  return (
    <div className="saved-movies-page">
      <Header />
      <Container>
        <section className="movies saved-movies-page__movies" aria-label="Сохраненные фильмы">
          <SearchForm
              submitHandler={submitHandler}
              checkbox={shortFilmsCheck}
              setCheckbox={setShortFilmsCheck}
          />
            {moviesForRender && !message && (
                <MoviesCardList
                    allMovies={moviesForRender}
                    onDeleteHandler={deleteMovie}
                    onSavedPage={true}
                />
            )}
            <p className="movies__message">{resultMessage}</p>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default SavedMovies;
