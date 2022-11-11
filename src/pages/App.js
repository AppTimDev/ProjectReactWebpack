import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/"  element={<Navbar />}> */}
                <Route path="/" >
                    <Route index element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
                <Route path="/react" >
                    <Route index element={<Home />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}