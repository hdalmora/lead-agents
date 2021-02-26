import React, { useContext } from 'react';
import { MarkerContainer } from './styles';
import { LeadStoreCtx } from '../../stores/LeadStore';

type MapMarkerProps = {
  lat: number,
  lng: number,
  id: string
  name: string,
  color: string,
}

const MapMarker = ({lat, lng, id, name, color}: MapMarkerProps) => {

  const leadStore = useContext(LeadStoreCtx);

  return (
    <MarkerContainer
      style={{ backgroundColor: color, cursor: 'pointer'}}
      title={name}
      onClick={() => {
        leadStore.setLeadMarkerSelected(id);
      }}
    />
  );
}; 

export default MapMarker;