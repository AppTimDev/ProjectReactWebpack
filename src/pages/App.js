import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'
import Login from './Login'
// import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
import {url} from '../js/global'
export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={url("/")}  element={<Home />} />
                <Route path={url("/home")} element={<Home />} />
                <Route path={url("/login")} element={<Login />} />
                <Route path={url("/*")} element={<PageNotFound />} />
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