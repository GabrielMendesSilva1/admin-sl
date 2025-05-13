import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Segurado from "../pages/segurados";
import Automovel from "../pages/seguros/automovel";
import Patrimonial from "../pages/seguros/patrimonial";
import Seguradoras from "../pages/seguradoras";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/segurados" element={<Segurado />} />
                <Route path="/automovel/:cpfCnpj" element={<Automovel />} />
                <Route path="/patrimonial/:cpfCnpj" element={<Patrimonial />} />
                <Route path="/seguradoras" element={<Seguradoras />}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;