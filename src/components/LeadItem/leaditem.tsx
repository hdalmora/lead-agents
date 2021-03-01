import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { observer } from "mobx-react-lite";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Container, Row, TitleContainer, SubTextContainer, LocationPinContainer } from './styles';
import CustomRoundButton from '../CustomRoundButton/custom-round-button';
import { LeadStoreCtx } from '../../stores/lead-store';

type LeadItemProps = {
    id?: string,
    name: string,
    address: string,
    lat: number,
    lng:number,
    isClient: boolean
}

export const LeadItem = ({id, name, address, lat, lng, isClient}: LeadItemProps) => {

    const leadStore = useContext(LeadStoreCtx);

    const handleMapIconClick = () => {
        leadStore.setMapCenter({ lat, lng })
        leadStore.setLeadMarkerSelected(id!, true);
    }

    const handleSelectLeadForInfo = () => {
        leadStore.setInfoSelected({
            id,
            name,
            address,
            lat,
            lng,
            isClient
        });
    }

    return (
        <Container>
            <Link to={`/leads/${id}`}>
                <div className="info-container" onClick={handleSelectLeadForInfo}>
                    <div>
                        <TitleContainer>
                            {name ?? ''}
                        </TitleContainer>

                        <SubTextContainer>
                            {address ?? ''}
                        </SubTextContainer>
                    </div>
                </div>
            </Link>

            <Row>
                <CustomRoundButton>
                    Nova Tarefa
                </CustomRoundButton>

                <div className="location-button" onClick={handleMapIconClick}>
                    <Link to='map'>
                        <LocationPinContainer>
                            <IconContext.Provider value={{ color: isClient ? 'var(--green-main-stone)' : 'var(--blue-accent)',size: '1.5rem' }}>
                                <FaMapMarkerAlt />
                            </IconContext.Provider>
                        </LocationPinContainer>
                    </Link>
                </div>
            </Row>
        </Container>

    );
}
  
export default observer(LeadItem);