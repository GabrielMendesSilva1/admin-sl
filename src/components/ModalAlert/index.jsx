import React from "react";
import { Overlay, Box, Message, Button, Icon } from "./styles";
import { IoIosWarning } from "react-icons/io";

const AlertMessage = ({ message, onClose }) => {
    return (
        <Overlay>
            <Box>
                <Icon>
                    <IoIosWarning />
                </Icon>
                <Message>{message}</Message>
                <Button onClick={onClose}>Voltar</Button>
            </Box>
        </Overlay>
    );
};

export default AlertMessage;
