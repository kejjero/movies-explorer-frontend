import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import cardImage from "../../images/card_image1.jpg"

const MoviesCardList = ({isSave}) => {

  // временно захардкодил
  const movies = [
    {
      title: '33 слова о дизайне',
      image: cardImage,
      duration: '1ч 21м'
    },
    {
      title: '33 слова о дизайне',
      image: cardImage,
      duration: '1ч 21м'
    },
    {
      title: '33 слова о дизайне',
      image: cardImage,
      duration: '1ч 21м'
    },
    {
      title: '33 слова о дизайне',
      image: cardImage,
      duration: '1ч 21м'
    }
  ]


  return (
    <ul
      className={'movies-list movies-page__movies-list'}
    >
      {
        movies.map((item, index) => (
          <MoviesCard key={index} item={item} isSave={isSave}/>
        ))
      }
    </ul>
  );
};

export default MoviesCardList;
