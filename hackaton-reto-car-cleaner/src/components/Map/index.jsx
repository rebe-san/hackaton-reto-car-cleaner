import React from "react"
import './style.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]


const MapComponent = () => {
    return (
        <Map center ={position} zoom={13}>
            <TileLayer
            url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
                <Popup>A pretty Map</Popup>
            </Marker>
        </Map>
    )
  }

  export default MapComponent