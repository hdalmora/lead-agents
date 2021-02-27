import React, { useState } from 'react';
import GoogleMapReact, { ClickEventValue } from 'google-map-react';
import MapMarker from '../MapMarker/map-marker';
import { MapContainer } from './styles';

const MapView = (props: any) => {

  const handleMapClicked = (event: ClickEventValue) => {
    console.log(event);
  }

  return (
      <MapContainer className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDgd4kB30m-DWzkZcylrJLisKNofVir1Y0' }}
        defaultCenter={{lat: -23.210801, lng: -46.857105 }}
        defaultZoom={18}
        onClick={handleMapClicked}
      >
        <MapMarker
          id='123'
          color='var(--green-main-stone)'
          lat={11.0168}
          lng={76.9558}
          name="My Marker"
        />
      </GoogleMapReact>
    </MapContainer>
  );
}

export default MapView;