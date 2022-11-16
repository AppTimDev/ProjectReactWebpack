import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'
import Login from './Login'
// import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
import {Url} from '../js/global'
export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Url("/")}  element={<Home />} />
                <Route path={Url("/home")} element={<Home />} />
                <Route path={Url("/login")} element={<Login />} />
                <Route path={Url("/*")} element={<PageNotFound />} />
                {/* <Route path="/"  element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} /> */}

                {/* relative path */}
                {/* <Route path="/react" >
                    <Route index element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}