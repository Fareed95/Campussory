import React from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import '/src/Styles/Map.css'
import 'leaflet/dist/leaflet.css'
import img from '/public/undraw_adventure_map_hnin.svg'
// import img from '/src/assets/undraw_map_re_60yf.svg'
function Map(){
  const points=[
    {
      coordinates:[19.048223596531358, 72.91141979223762],
      popup :"You are here " 
    },
    {
      coordinates:[18.933700,72.836510],
      popup :"Google office " 
    },
    {
      coordinates:[18.933700, 72.8464205],
      popup :"JP morgan and chase " 
    },
  ]
    return(
        <div className="map">
          <div id="text">
            <h1>Office Locations.</h1>
            <h3>Find all our recent and nearby officies</h3>
          </div>
<div className="im">
<img className="vector" src={img}></img>
  </div>




        <MapContainer center={[19.048223596531358, 72.91141979223762]} zoom={11} scrollWheelZoom={false}>

  <TileLayer
    attribution='&copy; <a https://api.maptiler.com/maps/satellite/tiles.json?key=bMEWXYfCjeUC5yYo4EOC'
    url="https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=bMEWXYfCjeUC5yYo4EOC"
  />
  {
    points.map(points=>(
<Marker position={points.coordinates}>
    <Popup>
    {points.popup}
    </Popup>
  </Marker>
    ))
  }
  
</MapContainer>


        </div>
        
    )
}
export default Map;