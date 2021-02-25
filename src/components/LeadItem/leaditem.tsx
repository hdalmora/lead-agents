import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Container, Row, TitleContainer, SubTextContainer, RoundButton, LocationPinContainer } from './styles';

const LeadItem = () => {
    return (
        <Container>

            <div>
                <TitleContainer>
                    Lavanderia ABC
                </TitleContainer>

                <SubTextContainer>
                    Rua Oliveira, 1098
                </SubTextContainer>
            </div>

            <Row>
                <RoundButton>
                    Nova Tarefa
                </RoundButton>

                <LocationPinContainer>
                    <IconContext.Provider value={{ color: 'var(--blue-accent)',size: '1.5rem' }}>
                        <FaMapMarkerAlt />
                    </IconContext.Provider>
                </LocationPinContainer>
            </Row>
        </Container>
    );
}
  
export default LeadItem;