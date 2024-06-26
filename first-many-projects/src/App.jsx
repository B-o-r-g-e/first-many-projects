import React from "react";

import {Route, Routes} from "react-router-dom";
import {Library} from "./features/index.js";
import Home from "./home/Home.jsx";
import Cart from "./innerFuncs/cart/Cart.jsx"
import SignIn from "./innerFuncs/signIn/SignIn.jsx";
import CreateAccount from "./innerFuncs/createAccount/CreateAccount.jsx";
import ContactUs from "./innerFuncs/contactUs/ContactUs.jsx";
import Plans from "./innerFuncs/plans/Plans.jsx";
import News from "./innerFuncs/news/News.jsx";
import CaseStudy from "./innerFuncs/caseStudy/CaseStudy.jsx";



const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/library"} element={<Library />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/signIn"} element={<SignIn />} />
            <Route path={"/createAccount"} element={<CreateAccount />} />
            <Route path={"/contactUs"} element={<ContactUs />} />
            <Route path={"/plans"} element={<Plans />} />
            <Route path={"/news"} element={<News />} />
            <Route path={"/caseStudy"} element={<CaseStudy />} />
        </Routes>
    )
}

export default App
