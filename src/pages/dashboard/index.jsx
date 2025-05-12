import React from "react";
import { Container, Title, Menu, MenuItem } from "../login/styles";

const Dashboard = () => {
    return ( 
        <Container>
            <Title> SL Assistência de Seguros </Title>
            <Menu>
                <MenuItem onClick={() => alert('Ir para Cadastro')}>Cadastro</MenuItem>
                <MenuItem onClick={() => alert('Ir para Segurados')}>Segurados</MenuItem>
                <MenuItem onClick={() => alert('Ir para Seeguradora')}>Seguradora</MenuItem>
                <MenuItem onClick={() => alert('Sair')}>Sair</MenuItem>
            </Menu>
        </Container>
    );
};

export default Dashboard;