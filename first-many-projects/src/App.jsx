import React from "react";

import {BrowserRouter as Route, Routes} from "react-router-dom";
import {Library} from "./misc/index.js";
import Home from "./home/Home.jsx";



const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/library"} element={<Library />} />
        </Routes>

    )
}

export default App
