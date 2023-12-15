import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import React from 'react'

function Mapa({volunteers}) {
  const defaultCenter = [27.88343, -15.44213]
  if (!volunteers || volunteers.length === 0) {
    return <p>No hay voluntarios disponibles</p>
  }
  return (
    <MapContainer center={defaultCenter} zoom={10} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {volunteers.map((volunteer) => (
        <Marker key={volunteer.id} position={defaultCenter}>
          <Popup>
            {volunteer.location} <br /> {volunteer.firstName}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Mapa