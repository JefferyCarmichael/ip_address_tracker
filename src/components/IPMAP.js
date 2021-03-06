import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
/*Displays map using coordinates from Ipify API*/

const MyComponent = (props) => {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
};

const IpMap = ({ location }) => {
  const { lat, lng } = location;

  let position = [lat, lng];
  return (
    <MapContainer center={position} zoom={17 } scrollWheelZoom={false} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent center={position} zoom={17} />

      <Marker position={position}>
        <Popup>
       <b>Lattitude:</b>  {lat} <br /> <b>Longitude:</b> {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default IpMap;
