import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../assets/styles/components/Map.scss';

const TestMap = () => {
  return (
    <div className='Map'>
      Mapa
      <Map center={[23, -101]} zoom={5.4}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
};

export default TestMap;
