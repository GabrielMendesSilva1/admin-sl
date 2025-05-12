import React from "react";
import { Container, Background, LoginBox, Logo, Input, Button } from './styles';

const Login = () => {
    return (
        <Container>
            <Background>
                <LoginBox>
                    <Logo> SL Assistência de SEGUROS</Logo>
                    <Input type="email" placeholder="E-mail" />
                    <Input type="password" placeholder="Senha" />
                    <Button> Entrar </Button>
                </LoginBox>
            </Background>
        </Container>
    );
};

export default Login