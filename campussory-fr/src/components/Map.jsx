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
      coordinates:[18.490637,73.809486],
      popup :"Code mainia 4.0 , 24 Feb saturday " 
    },
    {
      coordinates:[17.546950,78.282730],
      popup :"Hack to crack , 21 March " 
    },
    {
      coordinates:[19.0667, 72.826],
      popup :"Cybersecurity workshop , 4-March " 
    },
  ]
    return(
        <div className="map">
          <div id="text">
            <h1>Office Locations</h1>
          </div>
<div className="im">
<img className="vector" src={img}></img>
  </div>




        <MapContainer center={[19.0667, 72.826]} zoom={8} scrollWheelZoom={false}>

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