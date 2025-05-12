import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Background,
    Form,
    Title,
    Input,
    Button
} from "./styles";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'gabriel@gmail.com' && senha === '12345') {
            navigate('/dashboard');
        } else {
            alert('Dados inválidos!');
        }
    };

    return (
        <Container>
            <Background /> {/* <-- Isso estava faltando! */}
            <Form onSubmit={handleLogin}>
                <Title>SL Assistência de SEGUROS</Title>
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
};

export default Login;
