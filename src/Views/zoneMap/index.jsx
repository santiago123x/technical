import { useState } from "react";
import TableComplete from "../../Components/Table/Index";
import useAxios from "../../CustomHooks/useAxios";
import Loading from "../../Components/Loading";
import Error404 from "../../Components/Error";
import Search from "../../Components/Search";
import "./index.css";
import Map from "../../Components/Map";

const ZoneMap = () => {
  const [searchValue, setSearchValue] = useState("");
  const [zoneSelect, setZoneSelect] = useState({
    latitude: 3.3950619,
    longitude: -76.5957048,
    area: 0,
  });
  const [url, setUrl] = useState(`/zones`);
  const [recharge, setRecharge] = useState(false);
  const { data, error, loading } = useAxios(url, recharge);
  const columns = ["id", "Area", "Codigo", "Latitud", "Longitud", "Opciones"];
  return (
    <>
      <div className="conteinerCattle">
        <div className="cont__lista">
          <h2 className="cont__lista-titulo">Listado de Zonas</h2>

          <hr className="linea-h2" />
          <div className="contSearch">
            <Search
              valueInp={searchValue}
              setValueInp={setSearchValue}
              titulo="Filtrar Zona"
              tooltip={`Tipos de Filtro: - Codigo - Coordenadas`}
            />
          </div>
          <div className="cont__lista-tabla">
            {loading ? (
              <Loading />
            ) : error ? (
              <Error404
                width={200}
                error="Se ha producido un problema, Recargue la pagina."
              />
            ) : (
              <TableComplete
                data={data}
                filter={searchValue}
                titles={columns}
                titleDetails={[]}
                recharge
                setRecharge
                setZoneSelect={setZoneSelect}
              />
            )}
          </div>
          <div className="map">
            <h2 className="cont__lista-titulo">Mapa de las Zonas</h2>
            <Map dataSelect={zoneSelect} type={1}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoneMap;
