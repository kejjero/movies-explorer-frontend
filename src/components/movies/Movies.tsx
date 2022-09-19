import {Preloader, SearchForm, MoviesCardList, MoviesCard} from "../index"
import React from "react"
import {cardsData} from "../moviesCard/cardsData"

const Movies = () => {

    // сделал немного другой preloader
    const skeletons = () => {
        return new Array(2).fill(null).map((_item, index) => (<Preloader key={index}/>))
    }

    // на этапе верстки захардкодил cards
    const cards = () => {
        return cardsData.map((item, index) => (<MoviesCard item={item} key={index}/>))
    }

    return(
        <main>
            <SearchForm/>
            <MoviesCardList>
                {skeletons()}
                {cards()}
            </MoviesCardList>
        </main>
    )
}

export default Movies;