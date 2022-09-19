import {Route, Routes} from 'react-router-dom';
import {Header, Main, Movies, SavedMovies, Profile, Login, Register, PageNotFound, Footer} from "../index";
import "../../vendor/normalize.css"
import "./app.scss"

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/saved-movies" element={<SavedMovies/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/signin" element={<Login/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
