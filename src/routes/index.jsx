import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ConsultaSegurado from "../pages/ConsultaSegurados";
import Automovel from "../pages/ConsultaSeguros/automovel";
import Patrimonial from "../pages/ConsultaSeguros/patrimonial";
import Seguradoras from "../pages/ConsultaSeguradoras";

import CadastroSegurado from "../pages/cadastro/Segurado";
import CadastroSeguradora from "../pages/cadastro/Seguradora";
import CadastroAuto from "../pages/cadastro/Seguros/Automovel";
import CadastroPatrimonial from "../pages/cadastro/Seguros/Patrimonial";

const AppRoutes = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/segurados" element={<ConsultaSegurado />} />
                <Route path="/automovel/:cpfcnpj" element={<Automovel />} />
                <Route path="/patrimonial/:cpfcnpj" element={<Patrimonial />} />
                <Route path="/seguradoras" element={<Seguradoras />} />\

                <Route path="/cadastro/Segurado" element={<CadastroSegurado />} />
                <Route path="/cadastro/Seguradora" element={<CadastroSeguradora />} />
                <Route path="/cadastro/Automovel" element={<CadastroAuto />} />
                <Route path="/cadastro/Patrimonio" element={<CadastroPatrimonial />} />
            </Routes>
    );
}

export default AppRoutes;