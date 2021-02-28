import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import GoogleMapReact, { ClickEventValue } from 'google-map-react';
import MapMarker from '../MapMarker/map-marker';
import { MapContainer } from './styles';
import { NewLeadFormStoreCtx } from '../../stores/new-lead-form-store';
import { LeadStoreCtx } from '../../stores/lead-store';
import NewLeadForm from '../NewLeadForm/new-lead-form';

const MapView = (props: any) => {

  const newLeadFormStore = useContext(NewLeadFormStoreCtx);
  const leadStore = useContext(LeadStoreCtx);

  const handleMapClicked = (event: ClickEventValue) => {    
    newLeadFormStore.openForm(event.lat, event.lng);
  }

  return (
      <MapContainer className="map-container">
        <NewLeadForm />
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDgd4kB30m-DWzkZcylrJLisKNofVir1Y0' }}
          defaultCenter={leadStore.mapCenter}
          defaultZoom={19}
          onClick={handleMapClicked}
        >
        {
          leadStore.leads.map(
            lead => (
                <MapMarker
                key={lead.id!}
                id={lead.id!}
                color={lead.isClient ? 'var(--green-main-stone)' : 'var(--blue-accent)'}
                lat={lead.lat}
                lng={lead.lng}
                name={lead.name}
              />
            )
          )
        }
        </GoogleMapReact>
    </MapContainer>
  );
}

export default observer(MapView);