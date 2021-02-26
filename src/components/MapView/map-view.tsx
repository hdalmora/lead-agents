import React, { useState } from 'react';
import GoogleMapReact, { ClickEventValue } from 'google-map-react';
import MapMarker from '../MapMarker/map-marker';
import { MapContainer } from './styles';

const MapView = (props: any) => {
  const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);

  const handleMapClicked = (event: ClickEventValue) => {
    console.log(event);
  }

  return (
      <MapContainer className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDgd4kB30m-DWzkZcylrJLisKNofVir1Y0' }}
        defaultCenter={center}
        defaultZoom={zoom}
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