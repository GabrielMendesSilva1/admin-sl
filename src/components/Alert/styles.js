// src/components/AlertMessage/styles.js
import styled from "styled-components";
import background from "../../assets/insurance-bg.jpeg";
import { IoIosWarning } from "react-icons/io";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(${background}) center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const Box = styled.div`
    background: #ffffff;
    padding: 32px 24px;
    border-radius: 12px;
    text-align: center;
    width: 90%;
    max-width: 420px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`;

export const Icon = styled.div`
    font-size: 48px;
    color: #ff6b6b; /* Vermelho para indicar erro */
    margin-bottom: 16px;
`;

export const Message = styled.p`
    font-size: 18px;
    color: #333333;
    margin-bottom: 24px;
`;

export const Button = styled.button`
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
