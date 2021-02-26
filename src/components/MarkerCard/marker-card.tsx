import React from 'react';
import { Container, LeftContainer, Column, TitleContainer, SubTextContainer } from './styles';
import CustomRoundButton from '../CustomRoundButton/custom-round-button';

type MarkerCardProps = {
    id?: string,
    name: string,
    address: string,
    isClient: boolean
}

const MarkerCard = ({id, name, address, isClient}: MarkerCardProps) => {
    
    return (
        <Container>
            <LeftContainer />

            <Column>
                <div>
                    <TitleContainer>
                        {name ?? ''}
                    </TitleContainer>

                    <SubTextContainer>
                        {address ?? ''}
                    </SubTextContainer>
                </div>

                <CustomRoundButton>
                    Nova Tarefa
                </CustomRoundButton>
            </Column>
        </Container>
    );
}
  
export default MarkerCard;