import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

const DefaultIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

L.Marker.prototype.options.icon = DefaultIcon



function Mapa({ volunteers }) {
  const [markers, setMarkers] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
              console.error('Error al obtener coordenadas:', error)
              return null
            }
          })
        )

        setMarkers(markersData.filter((marker) => marker !== null))
      }

      getGeocodedLocations()
    }
  }, [volunteers])

  const defaultCenter = [28.430907, -15.840954]

  if (!volunteers || volunteers.length === 0) {
    return <p>No hay voluntarios disponibles</p>
  }

  return (
    <div style={{ textAlign: 'center', marginBottom: "30px" }}>
      <Button variant="contained" color="primary" onClick={handleOpen} startIcon={<LocationOnIcon />}>
        MOSTRAR MAPA
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>MAPA DE VOLUNTARIOS</DialogTitle>
        <DialogContent>
          <MapContainer center={defaultCenter} zoom={8} style={{ height: '500px', width: '500px' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>
                  <img src={marker.volunteerData.profile} alt="" style={{ width: "100px", height: "75px", borderRadius: "7px" }} /><br /> <b>{marker.volunteerData.firstName}</b><br /> {marker.volunteerData.location} <br />Votos:{marker.volunteerData.background}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Mapa
