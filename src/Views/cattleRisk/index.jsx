import React,{ useState,useContext,useLayoutEffect } from "react";
import Map from "../../Components/Map";
import useAxios from "../../CustomHooks/useAxios";
import Loading from "../../Components/Loading";
import Error404 from "../../Components/Error";
import './index.css'
import UserContext from "../../Context/User/UserContext";
import { useNavigate } from "react-router-dom";

const CattleRisk = () => {
  const [recharge, setRecharge] = useState(false);
  const { data, loading, error} = useAxios("/allInfo", recharge);
  const {  user } = useContext(UserContext);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user]);
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
