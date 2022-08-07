import { useState } from "react";
import Map from "../../Components/Map";
import useAxios from "../../CustomHooks/useAxios";
import Loading from "../../Components/Loading";
import Error404 from "../../Components/Error";
import './index.css'

const CattleRisk = () => {
  const [recharge, setRecharge] = useState(false);
  const { data, loading, error} = useAxios("/allInfo", recharge);
  return (
    <div className="mapRisk">
      <h2 className="cont__lista-titulo">Mapa del Ganado en Zona de riesgo</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error404
          width={200}
          error="Se ha producido un problema, Recargue la pagina."
        />
      ) : (
        <Map dataSelect={data} type={2} />
      )}
    </div>
  );
};

export default CattleRisk;
