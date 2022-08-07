import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CattleRisk from "../Views/cattleRisk";
import CattleInfo from "../Views/cattleInfo";
import ZoneMap from "../Views/zoneMap";
import Login from "../Views/Login";
import Layout from "../Components/Layout";
import Error404 from "../Components/Error";
import UserState from '../Context/User/UserState'
import { ToastContainer } from "react-toastify";
// import your route components too

const Router = () => {
  return (
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route
            path="/cattle-risk"
            element={
              <Layout>
                <CattleRisk />
              </Layout>
            }
          />
          <Route
            path="/cattle-info"
            element={
              <Layout>
                <CattleInfo />
              </Layout>
            }
          />
          <Route
            path="/zone-map"
            element={
              <Layout>
                <ZoneMap />
              </Layout>
            }
          />

          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <Error404
                ancho={400}
                error="Pagina no Encontrada, Error 404."
                boton={true}
              />
            }
          ></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </UserState>
  );
};

export default Router;
