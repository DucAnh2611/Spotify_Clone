
import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export default function AppRouter() {

    return (
        <Routes>

            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />

        </Routes>
    )
}