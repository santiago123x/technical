import React, { useState, useEffect } from "react";
import "./index.css";
import ErrorImage from "./error.png";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

export const Error404 = ({
  error = "Se ha Producido un Error, Por favor Recargue la Pagina.",
  ancho = 400,
  boton = false,
}) => {
  let navigate = useNavigate();

  const pushInicio = () => {
    navigate("/cattle-info");
  };

  const [clase, setClase] = useState(null);
  useEffect(() => {
    if (ancho <= 200) {
      setClase("small");
    } else {
      setClase("big");
    }
  }, []);
  return (
    <div className="error-container">
      <img width={ancho} className="cont__error-img" src={ErrorImage}></img>
      {clase && <h3 className={`titulo ${clase}`}>Error: {error}</h3>}
      {boton && (
        <div className="button-error">
          <Button
            size="small"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => pushInicio()}
          >
            Ir al listado de Ganado
          </Button>
        </div>
      )}
    </div>
  );
};

export default Error404;