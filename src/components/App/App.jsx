import "./App.css";
import {useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile"
import "../../vendor/normalize.css"
import "./App.css";
import ErrorPopup from "../ЕrrorPopup/ErrorPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import currentUserContext from "../../context/currentUserContext";
import {mainApi} from "../../utils/MainApi";
import {DEFAULT_ERROR_MESSAGE} from "../../utils/constants";
import {NOTIFICATION_DURATION} from "../../utils/constants";
import * as auth from "../../utils/auth";

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        name: "",
        email: "",
    });

    const [savedMovies, setSavedMovies] = useState([]);
    const [profileMessage, setProfileMessage] = useState("");
    const [profileMessageModifier, setProfileMessageModifier] = useState(false);
    const [savedMoviesMessage, setSavedMoviesMessage] = useState("");
    const [unauthPageMessage, setUnauthPageMessage] = useState("");
    const [popupError, setPopupError] = useState("");
    const [popupErrorStatus, setPopupErrorStatus] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (token && !popupErrorStatus) {
            setIsLoggedIn(true);
            if (location.pathname === "/signup" || location.pathname === "/signin") {
                navigate("/movies");
            } else {
                navigate(location.pathname);
            }
        }
    }, [token, isLoggedIn, navigate, location.pathname]);

    console.log(isLoggedIn)

    useEffect(() => {
        if (isLoggedIn) {
            mainApi
                .getCurrentUserInfo(token)
                .then(([response]) => setCurrentUser(response))
                .catch((e) => {
                    showPopupError(e.message);
                    setIsLoggedIn(false);
                    navigate("/signin");
                });
        }
    }, [token, isLoggedIn, navigate]);

    useEffect(() => {
        if (isLoggedIn && !popupErrorStatus) {
            mainApi
                .getSavedMovies(token)
                .then((moviesData) => {
                    const ownSavedMovies = moviesData.filter(
                        (movie) => movie.owner === currentUser._id
                    );
                    localStorage.setItem("savedMovies", JSON.stringify(ownSavedMovies));
                    setSavedMovies(ownSavedMovies);
                    setSavedMoviesMessage("");
                })
                .catch((e) => {
                    setSavedMoviesMessage(DEFAULT_ERROR_MESSAGE);
                    console.log(e);
                });
        }
    }, [currentUser._id, setSavedMovies, token, popupErrorStatus]);

    const showProfileMessage = (text, modifier) => {
        setProfileMessage(text);
        setProfileMessageModifier(modifier);
        setTimeout(() => setProfileMessageModifier(""), NOTIFICATION_DURATION);
    }

    const showPopupError = (text = "Что-то пошло не так") => {
        setPopupError(text);
        setPopupErrorStatus(true);
        setTimeout(() => setPopupErrorStatus(false), NOTIFICATION_DURATION);
    }

    const registerUser = (name, email, password) => {
        setIsLoading(true);
        auth
            .register(name, email, password)
            .then((res) => {
                if (res) {
                    loginUser(email, password);
                    setUnauthPageMessage("");
                }
            })
            .catch((e) => e.json())
            .then((e) => {
                if (e?.message) {
                    setUnauthPageMessage(e.message);
                }
            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        auth
            .authorize(email, password)
            .then((data) => {
                if (data.token) {
                    setIsLoggedIn(true);
                    navigate("/movies");
                    setUnauthPageMessage("");
                }
            })
            .catch((e) => e.json())
            .then((e) => {
                if (e?.message) {
                    setUnauthPageMessage(e.message);
                }
                setIsLoggedIn(false);
            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    }

    const updateUserInfo = (userDataFromForm) => {
        setIsLoading(true);
        mainApi
            .editCurrentUserInfo(userDataFromForm, token)
            .then((userDataUpdated) => {
                setCurrentUser({
                    name: userDataUpdated.name,
                    email: userDataUpdated.email,
                });
                showProfileMessage("Изменения сохранены", "success");
            })
            .catch((e) => showProfileMessage(e.message, "fail"))
            .finally(() => setIsLoading(false));
    }

    return (
        <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <div className="app">
                <ErrorPopup text={popupError} isVisible={popupErrorStatus} />
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/movies" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Movies
                                savedMovies={savedMovies}
                                setSavedMovies={setSavedMovies}
                                cardErrorHandler={showPopupError}
                            />
                        </ProtectedRoute>
                    }/>
                    <Route path="/saved-movies" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <SavedMovies
                                savedMovies={savedMovies}
                                setSavedMovies={setSavedMovies}
                                message={savedMoviesMessage}
                                cardErrorHandler={showPopupError}
                            />
                        </ProtectedRoute>
                    }/>
                    <Route path="/profile" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Profile
                                setIsLoggedIn={setIsLoggedIn}
                                submitHandler={updateUserInfo}
                                isLoading={isLoading}
                                message={profileMessage}
                                messageModifier={profileMessageModifier}
                            />
                        </ProtectedRoute>
                    }/>
                    <Route path="/signup" element={
                        <Register
                            submitHandler={registerUser}
                            isLoading={isLoading}
                            message={unauthPageMessage}
                            setMessage={setUnauthPageMessage}
                        />}/>
                    <Route path="/signin" element={<Login
                        submitHandler={loginUser}
                        isLoading={isLoading}
                        message={unauthPageMessage}
                        setMessage={setUnauthPageMessage}
                    />}/>
                    <Route path="*" element={<NotFound path="/404"/>}/>
                </Routes>
            </div>
        </currentUserContext.Provider>
    );
};

export default App;
