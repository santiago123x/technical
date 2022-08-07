import React,{ useState,useContext,useLayoutEffect } from "react";
import TableComplete from "../../Components/Table/Index";
import useAxios from "../../CustomHooks/useAxios";
import Loading from "../../Components/Loading";
import Error404 from "../../Components/Error";
import Map from '../../Components/Map'
import './index.css'
import UserContext from "../../Context/User/UserContext";
import { useNavigate } from "react-router-dom";

const CattleInfo = () => {
  const [cattleSelect, setCattleSelect] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [url, setUrl] = useState(`/cattle`);
  const [recharge, setRecharge] = useState(false);
  const { data, error, loading } = useAxios(url, recharge);
  const {  user } = useContext(UserContext);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user]);
  const columns = ["id","Propietario", "Codigo Animal", "Longitud", "Latitud", "Opciones" ];
  return (
    <>
      <div className="conteinerCattle">
        <div className="cont__lista">
          <h2 className="cont__lista-titulo">Listado del Ganado</h2>

          <hr className="linea-h2" />
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
                setZoneSelect={setCattleSelect}
              />
            )}
          </div>
          <div className="map">
            <h2 className="cont__lista-titulo">Mapa del Ganado</h2>
            <Map dataSelect={cattleSelect} type={0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CattleInfo;
