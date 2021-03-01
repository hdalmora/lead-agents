import React from 'react';
import Emoji from '../../components/Emoji/emoji';
import { Container, MainTitle, Title } from './styles';

const NotFoundPage = () => {
    return (
        <Container>
            <MainTitle>
                Ooops,
            </MainTitle>

            <Title>
                Encontramos um <strong>404</strong> por aqui!!
            </Title>

            <Emoji symbol="👻" label="smiley-face" />
        </Container>
    );
}
  
export default NotFoundPage;