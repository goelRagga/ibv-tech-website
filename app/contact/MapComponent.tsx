"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* IBV Technologies — H-228, Siddhi Colony, Raja Park, Jaipur */
const LAT = 26.9015;
const LNG = 75.7873;

const redIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 0;
      height: 0;
      position: relative;
    ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36" height="48"
        viewBox="0 0 36 48"
        style="position:absolute; left:-18px; top:-48px; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35));"
      >
        <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30S36 31.5 36 18C36 8.06 27.94 0 18 0z" fill="#E30A13"/>
        <circle cx="18" cy="18" r="7" fill="white"/>
      </svg>
    </div>
  `,
  iconSize: [36, 48],
  iconAnchor: [18, 48],
  popupAnchor: [0, -50],
});

export default function MapComponent() {
  useEffect(() => {
    /* Leaflet tries to load its own default icons from a CDN — suppress that */
    // @ts-expect-error _getIconUrl is internal
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "",
      iconUrl: "",
      shadowUrl: "",
    });
  }, []);

  return (
    <MapContainer
      center={[LAT, LNG]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[LAT, LNG]} icon={redIcon}>
        <Popup>
          <strong>IBV Technologies Pvt. Ltd.</strong>
          <br />
          H-228, Shanti Kishan Villa, 3rd Floor
          <br />
          Siddhi Colony, Raja Park
          <br />
          Jaipur, Rajasthan – 302016
        </Popup>
      </Marker>
    </MapContainer>
  );
}
