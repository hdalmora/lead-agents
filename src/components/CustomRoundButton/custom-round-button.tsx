import React, { ReactNode } from 'react';
import { observer } from "mobx-react-lite";
import { Container } from './styles';

type CustomRoundButtonProps = {
    children: ReactNode;
}

export const CustomRoundButton = ({ children }: CustomRoundButtonProps) => {
    return (
        <Container>
            { children }
        </Container>
    );
}
  
export default observer(CustomRoundButton);