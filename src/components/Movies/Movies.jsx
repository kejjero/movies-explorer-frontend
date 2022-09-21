import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Button from "../Button/Button";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const Movies = () => {

  return (
    <div className="movies-page">
      <Header />
      <Container>
        <section className="movies movies-page__movies" aria-label="Фильмы">
          <SearchForm/>
            <MoviesCardList isSave={false}/>
          <div className="movies__footer">
            <Button className="button_type_more">
              еще
            </Button>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Movies;
