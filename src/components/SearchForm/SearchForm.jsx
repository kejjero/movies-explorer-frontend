import React, {useEffect, useState} from "react";
import Button from "../Button/Button";

import Icons from "../Icons";
import "./SearchForm.css";
import {countInputs} from "../../utils/countInputs";
import {useCustomValidation} from "../../hooks/useCustomValidation";
import {useFormValidity} from "../../hooks/useFormValidity";

const SearchForm = ({submitHandler, checkbox, setCheckbox, lastSearchQuery, isLoading}) => {
    const [errorText, setErrorText] = useState("");
    const {
        values,
        errors,
        setValues,
        handleChange,
        isFormValid,
        setIsFormValid,
    } = useCustomValidation();
    const amountInputs = countInputs(".search-form__input");

    useFormValidity(values, errors, amountInputs, setIsFormValid);

    useEffect(() => {
        if (lastSearchQuery) {
            setValues({...values, "film-query": lastSearchQuery});
        }
    }, [lastSearchQuery, setValues]);

    const onClickCheckBox = () => setCheckbox(!checkbox);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (values["film-query"] === undefined) {
            setErrorText("Запрос не может быть пустым");
            return;
        }
        if (isFormValid) {
            submitHandler(checkbox, values["film-query"]);
            setErrorText("");
        }
        setErrorText(errors["film-query"]);
    };

    return (
        <form
            className="search-form app__search-form"
            name="search-movie"
            onSubmit={onSubmitForm}
            noValidate
        >
            <div className="search-form__wrapper">
                <div className="search-form__string">
                    <input
                        className={`search-form__input ${
                            isLoading ? "search-form__input_disabled" : ""
                        }`}
                        name="film-query"
                        placeholder="Фильм"
                        type="text"
                        required
                        onChange={handleChange}
                        value={values["film-query"] || ""}
                        autoComplete="off"
                        disabled={isLoading}
                    />
                    <Button
                        className={`button button_type_search button_type_blue ${
                            isLoading && "button_type_disabled"
                        }`}
                        type="submit"
                        isLoading={isLoading}
                    >
                        <Icons.Search/>
                    </Button>
                </div>
                <span className="search-form__error">{errorText}</span>
            </div>
            <label className="search-form__label" htmlFor="short-film">
                <span className="search-form__label-text">Короткометражки</span>
                <Button className={`search-form__pseudo-item ${checkbox && "search-form__pseudo-item_active"}`}
                        handler={onClickCheckBox}>
                    <span className={`search-form__circle ${checkbox && "search-form__circle_active"}`}></span>
                </Button>
            </label>
        </form>
    );
};

export default SearchForm;
