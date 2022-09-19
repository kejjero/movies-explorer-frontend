import React from "react";
import {MoviesCard, MoviesCardList, SearchForm} from "../index";
import {cardsData} from "../moviesCard/cardsData";

const SavedMovies: React.FC = () => {

    return(
        <main>
            <SearchForm/>
            <MoviesCardList>
                { cardsData.map((item) => (<MoviesCard item={item} key={item.id} isSaved={true}/>)) }
            </MoviesCardList>
        </main>
    )
}

export default SavedMovies;