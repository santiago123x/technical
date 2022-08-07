import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { Circle } from "react-leaflet/Circle";
import { Marker } from "react-leaflet/Marker";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMapEvent } from "react-leaflet/hooks";
import { Tooltip } from "react-leaflet/Tooltip";
import "leaflet/dist/leaflet.css";
import "./index.css";

const SearchPoint = ({ dataSelect, type }) => {
  const map = useMapEvent("click", () => {
    map.flyTo(
      [dataSelect.latitude, dataSelect.longitude],
      type === 0 ? 20 : 12
    );
  });
  return null;
};

const Map = ({ dataSelect, type }) => {
  const marketOrCircle = () => {
    switch (type) {
      case 0:
        if (dataSelect && dataSelect.latitude) {
          return (
            <Marker position={[dataSelect.latitude, dataSelect.longitude]}>
              <Tooltip>{dataSelect.owner}</Tooltip>
            </Marker>
          );
        } else {
          return <></>;
        }
        break;
      case 1:
        if (dataSelect && dataSelect.latitude) {
          return (
            <Circle
              center={[dataSelect.latitude, dataSelect.longitude]}
              radius={dataSelect.area}
              key={dataSelect.code}
              pathOptions={{ fillColor: 'red' }}
            >
              <Tooltip>{dataSelect.code}</Tooltip>
            </Circle>
          );
        } else {
          return <></>;
        }
        break;
      default:
        return <></>;
        break;
    }
  };
  const allData = () => {
    return (
      <>
        {dataSelect &&
          dataSelect.cattles &&
          dataSelect.cattles.map((cattle) => {
            return (
              <Marker
                position={[cattle.latitude, cattle.longitude]}
                key={cattle.code}
              >
                <Tooltip>{cattle.owner}</Tooltip>
              </Marker>
            );
          })}
        {dataSelect &&
          dataSelect.zones &&
          dataSelect.zones.map((zone) => {
              console.log(zone)
            return (
              <Circle
                center={[zone.latitude, zone.longitude]}
                radius={zone.area}
                key={zone.code}
                pathOptions={{ fillColor: 'red' }}
              >
                <Tooltip>{zone.code}</Tooltip>
              </Circle>
            );
          })}
      </>
    );
  };
  const [mark, setMark] = useState(type === 2 ? allData() : marketOrCircle());
  useEffect(() => {
    if (dataSelect) {
      if (type === 2) {
        setMark(allData());
      } else {
        setMark(marketOrCircle());
      }
    }
  }, [dataSelect]);

  return (
    <MapContainer
      style={{ height: "500px", with: "400px" }}
      center={[3.3950619, -76.5957048]}
      zoom={type === 2 ? 5 : type === 1 ? 12 : 15}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mark}

      <SearchPoint dataSelect={dataSelect} />
    </MapContainer>
  );
};

export default Map;
