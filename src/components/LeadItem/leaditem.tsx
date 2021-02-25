import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Container, Row, TitleContainer, SubTextContainer, RoundButton, LocationPinContainer } from './styles';

type LeadItemProps = {
    id: string
    name: string,
    address: string,
    isClient: boolean
  }

const LeadItem = ({id, name, address, isClient}: LeadItemProps) => {
    return (
        <Container>

            <div>
                <TitleContainer>
                    {name}
                </TitleContainer>

                <SubTextContainer>
                    {address}
                </SubTextContainer>
            </div>

            <Row>
                <RoundButton>
                    Nova Tarefa
                </RoundButton>

                <LocationPinContainer>
                    <IconContext.Provider value={{ color: isClient ? 'var(--green-main-stone)' : 'var(--blue-accent)',size: '1.5rem' }}>
                        <FaMapMarkerAlt />
                    </IconContext.Provider>
                </LocationPinContainer>
            </Row>
        </Container>
    );
}
  
export default LeadItem;