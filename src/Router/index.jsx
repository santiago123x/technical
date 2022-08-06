import { BrowserRouter, Routes, Route } from "react-router-dom";
import CattleRisk from "../Views/cattleRisk";
import CattleInfo from "../Views/cattleInfo";
import ZoneMap from "../Views/zoneMap";
import Login from "../Views/Login";
import Layout from "../Components/Layout";
// import your route components too

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          
        <Route path="/cattle-risk" element={<Layout><CattleRisk/></Layout>} />
        <Route path="/cattle-info" element={<Layout><CattleInfo/></Layout>} />
        <Route path="/zone-map" element={<Layout><ZoneMap/></Layout>} />
        
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
