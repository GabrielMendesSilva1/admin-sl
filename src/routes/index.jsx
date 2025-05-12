import React from "react";
import Login from "../pages/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "../pages/dashboard";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;