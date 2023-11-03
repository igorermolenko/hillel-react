import {Provider} from "react-redux";
import {store} from "./store";
import {WaitersComponent} from "./features/waiters";
import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {HomeComponent} from "./features/home";
import {AboutComponent} from "./features/about";
import {ErrorComponent} from "./features/error";
import "./App.css"

export function App() {
    const isActiveClass = ({isActive}: any) => isActive ? "active" : "";

    return (
        <Provider store={store}>
            <BrowserRouter>
                <nav className="navigation">
                    <NavLink to="/" className={isActiveClass}>Home</NavLink>{' | '}
                    <NavLink to="/waiters" className={isActiveClass}>Waiters</NavLink>{' | '}
                    <NavLink to="/about" className={isActiveClass}>About</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/waiters/*" element={<WaitersComponent/>}/>
                    <Route path="/about" element={<AboutComponent/>}/>
                    <Route path="*" element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}


