import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Segurado from "../pages/segurados/segurado";
import Automovel from "../pages/seguros/automovel/automovel";
import Patrimonial from "../pages/seguros/patrimonial/patrimonial";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/segurados" element={<Segurado />} />
                <Route path="/automovel/:cpfCnpj" element={<Automovel />} />
                <Route path="/patrimonial/:cpfCnpj" element={<Patrimonial />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;