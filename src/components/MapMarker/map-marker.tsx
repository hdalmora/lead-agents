import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { MarkerContainer } from './styles';
import { LeadStoreCtx } from '../../stores/lead-store';

type MapMarkerProps = {
  lat: number,
  lng: number,
  id: string
  name: string,
  color: string,
}

const MapMarker = ({lat, lng, id, name, color}: MapMarkerProps) => {

  const leadStore = useContext(LeadStoreCtx);

  const handleMarkerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    leadStore.setLeadMarkerSelected(id);
  }

  return (
    <MarkerContainer
      style={{ 
        backgroundColor: color, 
        cursor: 'pointer', 
        borderColor: leadStore.leadMarkerIdSelected === id ? '#f9ca24' : '#fff'
      }}
      title={name}
      onClick={handleMarkerClick}
    />
  );
}; 

export default observer(MapMarker);