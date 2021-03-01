import React from 'react';
import Emoji from '../Emoji/emoji';
import { Container } from './styles';


export const NegotiationText = () => {

    return (
        <Container>
            <div>
                <span>Quente</span>
                <Emoji symbol="🔥" label="smiley-face" />
            </div>

            <button type="button" className="send-proposition-btn">
                Enviar proposta comercial
            </button>
        </Container>

    );
}
  
export default NegotiationText;