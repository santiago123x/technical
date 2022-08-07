import React, { useState, useEffect, useContext } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import { FaKey, FaUser, FaCheck } from "react-icons/fa";
import ciat from "../../assets/ciat.png";
import llama from "../../assets/llama.gif";
import "./index.css";
import { ToastContainer } from "react-toastify";
import axiosIntance from "../../axiosConfig";
import { notify } from "../../Components/Notify";
import { useNavigate } from "react-router-dom";
import Input from "@mui/material/Input";
import UserContext from "../Context/User/UserContext";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [seePass, setSeePass] = useState("password");
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const { dispatch, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    password.length === 0 && setSeePass("password");
  }, [password]);

  useLayoutEffect(() => {
    if (user.user) {
      navigate("/zone-map");
    }
  }, [user]);

  const verifyUser = async () => {
    try {
      const body = {
        email: userInput,
        password,
      };
      setLoading(true);
      const response = await axiosIntance.post(`/login`, body);
      if (response.status === 200) {
        const data = response.data;
        if (response.data.isAuth) {
          const email = data.email;
          setVerify(true);
          dispatch({ type: "LOGIN", payload: data });
          notify("Bienvenido: ", email, "info");

          navigate("/zone-map");
        } else {
          notify("Usuario o contraseña invalida por favor verifique");
          setVerify(false);
          document.getElementById("inputUsuario").focus();
        }
      } else {
        notify("Usuario o contraseña invalida por favor verifique");
        setVerify(false);
        document.getElementById("inputUsuario").focus();
      }
      setLoading(false);
    } catch (error) {
      notify("Ha sucedido un problema intente mas tarde, ", error);
      setLoading(false);
      document.getElementById("inputUsuario").focus();
    }
  };

  return (
    <div className="login-conte">
      <div className="login">
        <img src={ciat} className="logo" alt="CIAT logo" />
        <h1>Risk Cattle</h1>
        <Input
          id="inputUsuario"
          placeholder="Usuario"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          startAdornment={
            <InputAdornment position="start" className="iconInputs">
              <FaUser className="iconologin" />
            </InputAdornment>
          }
        />
        <Input
          id="inputContra"
          placeholder="Contraseña"
          type={seePass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          startAdornment={
            <InputAdornment position="start" className="iconInputs">
              <FaKey className="iconologin" />
            </InputAdornment>
          }
        />
        <button
          className={`boton-login`}
          onClick={() => verifyUser()}
          id="botonlogin"
        >
          {loading ? (
            <img src={llama} className="llama" alt="llama azul" />
          ) : verify ? (
            <FaCheck className="check" />
          ) : (
            "Login"
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
