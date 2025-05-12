import React from "react";
import Login from "../pages/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
import Segurado from "../pages/segurados/segurado";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/segurados" element={<Segurado />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;