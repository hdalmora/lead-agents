import React from 'react';
import Emoji from '../Emoji/emoji';
import { Container, InfosContainer } from './styles';

type InfoProfileProps = {
    name: string,
    address: string
}

export const InfoProfile = ({ name, address }: InfoProfileProps) => {

    return (
        <div>
            <Container>
                <img alt="Lead/Company profile" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFLjZHjNCzjFg/company-logo_200_200/0/1604492502959?e=1622678400&v=beta&t=pCJWS6ctM-Idc6WbO_I7m3PQan67USXJFEOo2yXtnHE" />

                <div>
                    <strong>{ name }</strong>
                    <p>
                        <Emoji symbol="💪" label="smiley-face" />
                        Level 1
                    </p>
                </div>
            </Container>

            <InfosContainer>
                <div>
                    <span>Última visita</span>
                    <span>28/02/2021</span>
                </div>

                <div>
                    <span>Visitas planejadas para hoje</span>
                    <span>4</span>
                </div>

                <div>
                    <span>Total de visitas</span>
                    <span>22</span>
                </div>
            </InfosContainer>
        </div>

    );
}
  
export default InfoProfile;