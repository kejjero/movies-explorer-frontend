import React from "react";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

const SavedMovies = () => {

  return (
    <div className="saved-movies-page">
      <Header />
      <Container>
        <section className="movies saved-movies-page__movies" aria-label="Сохраненные фильмы">
          <SearchForm/>
          <MoviesCardList isSave={true}/>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default SavedMovies;
