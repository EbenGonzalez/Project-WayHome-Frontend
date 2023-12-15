import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from 'react'

function Mapa({ volunteers }) {
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    if (volunteers && volunteers.length > 0) {
      const getGeocodedLocations = async () => {
        const geocoder = new window.google.maps.Geocoder()

        const markersData = await Promise.all(
          volunteers.map(async (volunteer) => {
            try {
              const response = await new Promise((resolve, reject) => {
                geocoder.geocode({ address: volunteer.location }, (results, status) => {
                  if (status === 'OK') {
                    resolve(results[0].geometry.location)
                  } else {
                    reject(status)
                  }
                })
              })

              return {
                position: [response.lat(), response.lng()],
                volunteerData: volunteer,
              }
            } catch (error) {
              console.error('Error al obtener coordenadas:', error);
              return null
            }
          })
        )

        setMarkers(markersData.filter((marker) => marker !== null));
      }

      getGeocodedLocations()
    }
  }, [volunteers])

  const defaultCenter = [27.88343, -15.44213]

  if (!volunteers || volunteers.length === 0) {
    return <p>No hay voluntarios disponibles</p>
  }

  return (
    <MapContainer center={defaultCenter} zoom={10} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            {marker.volunteerData.location} <br /> {marker.volunteerData.firstName}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Mapa
