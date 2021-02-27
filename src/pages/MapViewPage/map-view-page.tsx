import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import MapView from '../../components/MapView/map-view';
import { LeadStoreCtx } from '../../stores/lead-store';
import { Container } from './styles';
import MarkerCard from '../../components/MarkerCard/marker-card';

export const MapViewPage = () => {

    const leadStore = useContext(LeadStoreCtx);

    return (
        <>
            <MapView />

            {
                leadStore.leadMarkerIdSelected !== '' && leadStore.leadDataById &&
                    <MarkerCard 
                        id={leadStore.leadDataById.id}
                        name={leadStore.leadDataById.name}
                        address={leadStore.leadDataById.address}
                        color={leadStore.leadDataById.isClient ? 'var(--green-main-stone)' : 'var(--blue-accent)'}
                    />
            }
        </>
    );
}
  
export default observer(MapViewPage);