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
import { supabase } from "../../lib/supaBaseClient"; // ajuste o caminho conforme seu projeto

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        });
        if (error) {
            setErrorMsg(error.message);
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <Container>
            <Background />
            <Form onSubmit={handleLogin}>
                <Title>SL Assistência de SEGUROS</Title>
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <Button type="submit">Entrar</Button>
                {errorMsg && <p style={{color: 'red', marginTop: '10px'}}>{errorMsg}</p>}
            </Form>
        </Container>
    );
};

export default Login;
