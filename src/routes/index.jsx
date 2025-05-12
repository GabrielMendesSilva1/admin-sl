import React from "react";
import Login from "../pages/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;