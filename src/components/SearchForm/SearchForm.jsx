import React, {useState} from "react";
import Button from "../Button/Button";

import Icons from "../Icons";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [checkButton, setCheckButton] = useState(true);

  const handleCheckButton = () => {
    setCheckButton(!checkButton)
  }

  return (
    <form
      className="search-form app__search-form"
      name="search-movie"
      noValidate
    >
      <div className="search-form__string">
        <input
          className="search-form__input"
          name="film-query"
          placeholder="Фильм"
          type="text"
          required
          value={searchValue}
          autoComplete="off"
          onChange={(evt) => setSearchValue(evt.target.value)}
        />
        <Button className="button button_type_search button_type_blue">
          <Icons.Search />
        </Button>
      </div>
      <label className="search-form__label" htmlFor="short-film">
        <input
          className="search-form__radio"
          type="checkbox"
          name="short-film-option"
          id="short-film"
          value="short-film"
        />
        <span className="search-form__label-text">Короткометражки</span>
        <Button className={`search-form__pseudo-item  ${checkButton && "search-form__pseudo-item_active"}`} handler={handleCheckButton}>
          <span className={`search-form__circle  ${checkButton && "search-form__circle_active"}`}></span>
        </Button>
      </label>
    </form>
  );
};

export default SearchForm;
