import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Segurado from "../pages/ConsultaSegurados";
import Automovel from "../pages/ConsultaSeguros/automovel";
import Patrimonial from "../pages/ConsultaSeguros/patrimonial";
import Seguradoras from "../pages/ConsultaSeguradoras";

import CadastroSegurado from "../pages/Cadastro/Segurado";
import CadastroSeguradora from "../pages/Cadastro/Seguradora";
import CadastroAuto from "../pages/Cadastro/Seguros/Automovel";
import CadastroPatrimonial from "../pages/Cadastro/Seguros/Patrimonial";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/segurados" element={<Segurado />} />
                <Route path="/automovel/:cpfCnpj" element={<Automovel />} />
                <Route path="/patrimonial/:cpfCnpj" element={<Patrimonial />} />
                <Route path="/seguradoras" element={<Seguradoras />}/>\

                <Route path="/cadastro/Segurado" element={<CadastroSegurado />} />
                <Route path="/cadastro/Seguradora" element={<CadastroSeguradora />} />
                <Route path="/cadastro/Automovel" element={<CadastroAuto />} />
                <Route path="/cadastro/Patrimonio" element={<CadastroPatrimonial />} />
                
            </Routes>
    );
};

export default AppRoutes;