import logo from "./icon/logo.png";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import placeholderIcon from "./icon/placeholder.png";
import Button from "react-bootstrap/Button";

// import { marker } from "leaflet";
function App() {
  const markers = [
    {
      geocode: [-7.56131769, 110.7687198],
      popUp: "Stasiun Pabelan",
    },
    {
      geocode: [-7.97460004, 110.93],
      popUp: "Stasiun Baturetno",
    },
    {
      geocode: [-7.75000004, 110.902],
      popUp: "Stasiun Bendung Colo",
    },
  ];

  const customMarkerIcon = new Icon({
    iconUrl: placeholderIcon,
    iconSize: [30, 30],
  });

  const customButtonStyle = {
    backgroundColor: "#a7c7e7",
    borderColor: "#a7c7e7",
    color: "black",
    display: "block",
    margin: "0 auto",
    width: "100px",
    fontSize: "0.8rem",
    textAlign: "center",
    fontWeight: "400",
  };

  return (
    <MapContainer center={[-7.5564, 110.82544]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={customMarkerIcon}>
          <Popup>
            <h3 className="poppins-bold" style={{ fontSize: "1rem" }}>
              {marker.popUp}
            </h3>
            <Button style={customButtonStyle} href="/table-view">
              {" "}
              View Table
            </Button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
