import React from 'react';
import { observer } from "mobx-react-lite";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Container, Row, TitleContainer, SubTextContainer, LocationPinContainer } from './styles';
import CustomRoundButton from '../CustomRoundButton/custom-round-button';

type LeadItemProps = {
    id?: string,
    name?: string,
    address?: string,
    isClient?: boolean
}

export const LeadItem = ({id, name, address, isClient}: LeadItemProps) => {
    return (
        <Container>

            <div>
                <TitleContainer>
                    {name ?? ''}
                </TitleContainer>

                <SubTextContainer>
                    {address ?? ''}
                </SubTextContainer>
            </div>

            <Row>
                <CustomRoundButton>
                    Nova Tarefa
                </CustomRoundButton>

                <LocationPinContainer>
                    <IconContext.Provider value={{ color: isClient ? 'var(--green-main-stone)' : 'var(--blue-accent)',size: '1.5rem' }}>
                        <FaMapMarkerAlt />
                    </IconContext.Provider>
                </LocationPinContainer>
            </Row>
        </Container>
    );
}
  
export default observer(LeadItem);