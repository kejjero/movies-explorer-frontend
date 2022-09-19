import React from "react";
import "./moviesCardList.scss"

const MoviesCardList: React.FC<any> = ({children}) => {
    return(
        <section className="moviesCardList">
            <div className="moviesCardList__wrapper container">
                {children}
            </div>
        </section>
    )
}

export default MoviesCardList;